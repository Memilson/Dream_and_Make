import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { get } from '../../api/http';
import { ImageSchema, type Image } from '../../api/types';
import { expandPlaceholders, placeholderImages } from '../../api/placeholders';
import { getSafeImageUrl, trackEvent } from '../../utils';

export interface UseCarouselOptions {
  autoMs?: number;
  count?: number;
  placeholderCount?: number;
}

interface CarouselState {
  items: Image[];
  currentIndex: number;
  progress: number;
  isLoading: boolean;
  isError: boolean;
  isPaused: boolean;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  pause: () => void;
  resume: () => void;
}

export const useCarousel = ({
  autoMs = 5000,
  count = 5,
  placeholderCount = 5,
}: UseCarouselOptions = {}): CarouselState => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['carousel-images', count],
    queryFn: async () => {
      const list = await get(`/images`, ImageSchema.array());
      return count && list.length > count ? list.slice(0, count) : list;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const items = useMemo(() => {
    if (isError) {
      return expandPlaceholders(Math.max(count, placeholderCount));
    }
    if (data && data.length > 0) {
      return data;
    }
    return expandPlaceholders(Math.max(count, placeholderCount));
  }, [count, data, isError, placeholderCount]);

  const total = items.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (currentIndex >= total) {
      setCurrentIndex(0);
    }
  }, [currentIndex, total]);

  const clearProgress = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = undefined;
    }
  }, []);

  const next = useCallback(() => {
    if (!total) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % total;
      trackEvent('carousel_next', { index: nextIndex, total });
      return nextIndex;
    });
  }, [total]);

  const prev = useCallback(() => {
    if (!total) return;
    setCurrentIndex((prev) => {
      const nextIndex = (prev - 1 + total) % total;
      trackEvent('carousel_prev', { index: nextIndex, total });
      return nextIndex;
    });
  }, [total]);

  const goTo = useCallback((index: number) => {
    if (!total) return;
    setCurrentIndex(() => Math.max(0, Math.min(index, total - 1)));
  }, [total]);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  useEffect(() => {
    clearProgress();
    setProgress(0);
    if (isPaused || total <= 1) {
      return undefined;
    }

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (start === null) {
        start = timestamp;
      }
      const elapsed = timestamp - start;
      const ratio = Math.min(1, elapsed / autoMs);
      setProgress(ratio);
      if (ratio >= 1) {
        start = timestamp;
        next();
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      clearProgress();
    };
  }, [autoMs, clearProgress, isPaused, next, total, currentIndex]);

  useEffect(() => () => clearProgress(), [clearProgress]);

  useEffect(() => {
    if (total <= 1) {
      return;
    }
    const nextIndex = (currentIndex + 1) % total;
    const nextItem = items[nextIndex];
    if (!nextItem) {
      return;
    }
    const url = getSafeImageUrl(nextItem.image_url, placeholderImages[0]?.image_url ?? '');
    if (!url) {
      return;
    }
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
  }, [currentIndex, items, total]);

  return {
    items,
    currentIndex,
    progress,
    isLoading,
    isError,
    isPaused,
    next,
    prev,
    goTo,
    pause,
    resume,
  };
};

export type UseCarouselResult = ReturnType<typeof useCarousel>;
