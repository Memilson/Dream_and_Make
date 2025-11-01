import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { get } from '../../api/http';
import { ImageSchema, type Image } from '../../api/types';
import { expandPlaceholders } from '../../api/placeholders';
import { trackEvent } from '../../utils';

export interface UseExploreFeedOptions {
  pageSize?: number;
  rootMargin?: string;
  fallbackCount?: number;
}

export interface ExploreFeedState {
  items: Image[];
  displayItems: Image[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  registerSentinel: (node: HTMLDivElement | null) => void;
  refresh: () => void;
  isEmpty: boolean;
}

interface PagePayload {
  items: Image[];
  nextPage: number;
}

export const useExploreFeed = ({
  pageSize = 20,
  rootMargin = '320px',
  fallbackCount = 24,
}: UseExploreFeedOptions = {}): ExploreFeedState => {
  const query = useInfiniteQuery<PagePayload>({
    queryKey: ['gallery-feed', pageSize],
    initialPageParam: 1,
    retry: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const list = await get(`/images?page=${pageParam}&limit=${pageSize}`, ImageSchema.array());
      return { items: list, nextPage: pageParam + 1 };
    },
    getNextPageParam: (last) => last.nextPage,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } = query;

  const items = useMemo(() => data?.pages.flatMap((page) => page.items) ?? [], [data]);
  const [sentinel, setSentinel] = useState<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const displayItems = useMemo(() => {
    if (items.length > 0) {
      return items;
    }
    if (isLoading) {
      return [];
    }
    return expandPlaceholders(fallbackCount);
  }, [fallbackCount, isLoading, items]);

  const registerSentinel = useCallback((node: HTMLDivElement | null) => {
    setSentinel(node);
  }, []);

  useEffect(() => {
    if (!sentinel || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    observerRef.current?.disconnect();
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (!entry || !entry.isIntersecting) {
        return;
      }
      if (!hasNextPage || isFetchingNextPage) {
        return;
      }
      const nextPage = (data?.pages?.length ?? 0) + 1;
      trackEvent('explore_load_more', { page: nextPage });
      fetchNextPage();
    }, { rootMargin });

    observer.observe(sentinel);
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [data, fetchNextPage, hasNextPage, isFetchingNextPage, rootMargin, sentinel]);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return {
    items,
    displayItems,
    isLoading,
    isFetchingNextPage,
    hasNextPage: Boolean(hasNextPage),
    registerSentinel,
    refresh: () => refetch(),
    isEmpty: !isLoading && items.length === 0,
  };
};

export type UseExploreFeedResult = ReturnType<typeof useExploreFeed>;
