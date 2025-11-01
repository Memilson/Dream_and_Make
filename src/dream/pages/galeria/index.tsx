import React from 'react';
import CardDream from '../../components/CardDream';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { get } from '../../api/http';
import { ImageSchema, type Image } from '../../api/types';
import { RefreshCw, Image as ImageIcon, User, Shuffle } from 'lucide-react';

const Galeria: React.FC = () => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['random-image'],
    queryFn: async () => {
      const list = await get('/images?random=1', ImageSchema.array());
      return list[0] || null;
    },
  });

  // Infinite Masonry Feed
  const {
    data: feed,
    isLoading: feedLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch: refetchFeed,
  } = useInfiniteQuery({
    queryKey: ['gallery-feed'],
    queryFn: async ({ pageParam = 1 }) => {
      const list = await get(`/images?page=${pageParam}&limit=20`, ImageSchema.array());
      return { items: list, nextPage: pageParam + 1 };
    },
    getNextPageParam: (last) => last.nextPage,
    initialPageParam: 1,
  });

  const items: Image[] = React.useMemo(() => feed?.pages.flatMap((p: any) => p.items) ?? [], [feed]);

  const sentinelRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }, { rootMargin: '200px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Lucky set
  const [luckySet, setLuckySet] = React.useState<Image[]>([]);
  const onLucky = async () => {
    const lucky = await get(`/images?luck=6`, ImageSchema.array());
    setLuckySet(lucky);
  };

  return (
    <div className="page-container">
      <h1>Galeria</h1>
      <CardDream className="mt-12">
        {isLoading && (
          <div className="grid gap-12">
            <div className="media-frame ratio-16x9 skeleton" />
            <div className="skeleton-line" style={{ width: '50%' }} />
            <div className="skeleton-line sm" style={{ width: '30%' }} />
          </div>
        )}
        {isError && (
          <div className="grid gap-12">
            <p className="text-muted">Não foi possível carregar o destaque.</p>
            <button className="dm-button dm-button--ghost" onClick={() => refetch()}>
              <RefreshCw className="tab-icon" aria-hidden /> Tentar novamente
            </button>
          </div>
        )}
        {!isLoading && !isError && !data && (
          <p className="text-muted">Sem conteúdo no momento. Volte mais tarde.</p>
        )}
        {data && (
          <div className="grid gap-12">
            <div className="flex-row gap-12 wrap" style={{ alignItems: 'center' }}>
              <ImageIcon className="tab-icon" aria-hidden />
              <strong>Destaque aleatório</strong>
            </div>
            <div className="media-frame ratio-16x9">
              <img src={data.image_url} alt={data.image_name || data.title || 'Imagem'} className="object-cover" />
            </div>
            <div className="flex-row gap-12 wrap" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <p className="text-muted">
                <User className="tab-icon" aria-hidden /> {data.image_name || data.title || 'Sem título'} · por {data.author}
              </p>
              <button className="dm-button dm-button--ghost" onClick={() => refetch()} disabled={isFetching} aria-busy={isFetching}>
                <RefreshCw className="tab-icon" aria-hidden /> {isFetching ? 'Carregando…' : 'Outra obra'}
              </button>
            </div>
          </div>
        )}
      </CardDream>

      <CardDream className="mt-12">
        <div className="flex-row wrap gap-12" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <strong>Descubra mais</strong>
          <div className="flex-row gap-12">
            <button className="dm-button dm-button--ghost" onClick={() => refetchFeed()} aria-busy={isFetchingNextPage}>
              <RefreshCw className="tab-icon" aria-hidden /> Atualizar feed
            </button>
            <button className="dm-button" onClick={onLucky}>
              <Shuffle className="tab-icon" aria-hidden /> Estou com sorte
            </button>
          </div>
        </div>
        {luckySet.length > 0 && (
          <div className="mt-16">
            <div className="masonry masonry-col-3">
              {luckySet.map((img) => (
                <figure key={`lucky-${img.id}`} className="masonry-item fade-in">
                  <img src={img.image_url} alt={img.image_name || img.title || 'Imagem'} />
                  <figcaption className="masonry-overlay"><User className="tab-icon" aria-hidden />{img.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </CardDream>

      <section className="mt-12">
        {feedLoading && (
          <div className="grid gap-12">
            <div className="skeleton" style={{ height: 200 }} />
            <div className="skeleton" style={{ height: 240 }} />
            <div className="skeleton" style={{ height: 180 }} />
          </div>
        )}
        {!feedLoading && (
          <div className="masonry masonry-col-3">
            {items.map((img) => (
              <figure key={img.id} className="masonry-item fade-in">
                <img src={img.image_url} alt={img.image_name || img.title || 'Imagem'} />
                <figcaption className="masonry-overlay"><User className="tab-icon" aria-hidden />{img.author}</figcaption>
              </figure>
            ))}
          </div>
        )}
        <div ref={sentinelRef} className="mt-16" aria-hidden />
        {isFetchingNextPage && <p className="text-muted mt-12">Carregando mais…</p>}
      </section>
    </div>
  );
};

export default Galeria;
