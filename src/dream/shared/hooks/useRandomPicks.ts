import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../api/http';
import { ImageSchema, type Image } from '../../api/types';
import { expandPlaceholders, placeholderImages } from '../../api/placeholders';
import { getSafeImageUrl, trackEvent } from '../../utils';

export interface RandomPicksState {
  highlight?: Image | null;
  highlightLoading: boolean;
  highlightError: boolean;
  refreshHighlight: () => void;
  randomItems: Image[];
  randomLoading: boolean;
  randomMessage: string | null;
  loadRandomItems: () => Promise<void>;
}

const HIGHLIGHT_QUERY_KEY = ['gallery-highlight'];

export const useRandomPicks = (count = 6): RandomPicksState => {
  const messageTimeout = useRef<number>();
  const [randomItems, setRandomItems] = useState<Image[]>(() => expandPlaceholders(count));
  const [randomLoading, setRandomLoading] = useState(false);
  const [randomMessage, setRandomMessage] = useState<string | null>(null);
  const isLocked = useRef(false);

  const highlightQuery = useQuery({
    queryKey: HIGHLIGHT_QUERY_KEY,
    queryFn: async () => {
      const [item] = await get('/images?random=1', ImageSchema.array());
      return item ?? null;
    },
    staleTime: 1000 * 60,
    retry: 1,
  });

  const highlight = useMemo(() => {
    if (highlightQuery.data) {
      return highlightQuery.data;
    }
    if (!highlightQuery.isLoading) {
      return placeholderImages[0];
    }
    return null;
  }, [highlightQuery.data, highlightQuery.isLoading]);

  const showMessage = useCallback((text: string) => {
    setRandomMessage(text);
    if (typeof window !== 'undefined') {
      window.clearTimeout(messageTimeout.current);
      messageTimeout.current = window.setTimeout(() => setRandomMessage(null), 4000);
    }
  }, []);

  const loadRandomItems = useCallback(async () => {
    if (isLocked.current) {
      return;
    }
    isLocked.current = true;
    setRandomLoading(true);
    try {
      const list = await get(`/images?luck=${count}`, ImageSchema.array());
      const valid = list.filter((item) => Boolean(getSafeImageUrl(item.image_url)));
      const payload = valid.length > 0 ? valid : expandPlaceholders(count);
      setRandomItems(payload);
      showMessage(valid.length ? 'Nova seleção carregada.' : 'Mostrando sugestões da curadoria.');
      trackEvent('random_clicked', { count: payload.length });
    } catch (error) {
      setRandomItems(expandPlaceholders(count));
      showMessage('Não encontramos novas obras agora. Tente novamente em instantes.');
    } finally {
      setRandomLoading(false);
      if (typeof window !== 'undefined') {
        window.setTimeout(() => {
          isLocked.current = false;
        }, 600);
      } else {
        isLocked.current = false;
      }
    }
  }, [count, showMessage]);

  useEffect(() => () => {
    if (typeof window !== 'undefined') {
      window.clearTimeout(messageTimeout.current);
    }
  }, []);

  return {
    highlight,
    highlightLoading: highlightQuery.isLoading,
    highlightError: highlightQuery.isError,
    refreshHighlight: () => highlightQuery.refetch(),
    randomItems,
    randomLoading,
    randomMessage,
    loadRandomItems,
  };
};

export type UseRandomPicksResult = ReturnType<typeof useRandomPicks>;
