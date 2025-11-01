import React from 'react';
import CardDream from '../../components/CardDream';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../api/http';
import { ImageSchema } from '../../api/types';

const Galeria: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
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
        {isLoading && <p className="text-muted">Carregando destaque…</p>}
        {isError && <p className="text-muted">Não foi possível carregar o destaque.</p>}
        {!isLoading && !isError && !data && (
          <p className="text-muted">Sem conteúdo no momento. Volte mais tarde.</p>
        )}
        {data && (
          <div>
            <strong>Destaque aleatório</strong>
            <div className="mt-12 grid gap-12">
              <img src={data.image_url} alt={data.image_name || data.title || 'Imagem'} className="w-100 rounded-12 border" />
              <p className="text-muted">
                {data.image_name || data.title || 'Sem título'} · por {data.author}
              </p>
            </div>
          </div>
        )}
      </CardDream>
    </div>
  );
};

export default Galeria;
