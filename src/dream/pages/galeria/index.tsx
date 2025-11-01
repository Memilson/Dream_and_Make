import React from 'react';
import CardDream from '../../components/CardDream';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../api/http';
import { ImageSchema } from '../../api/types';
import { RefreshCw, Image as ImageIcon, User } from 'lucide-react';

const Galeria: React.FC = () => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['random-image'],
    queryFn: async () => {
      const list = await get('/images?random=1', ImageSchema.array());
      return list[0] || null;
    },
  });

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
    </div>
  );
};

export default Galeria;
