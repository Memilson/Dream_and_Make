import React from 'react';
import CardDream from '../../components/CardDream';
import { Image as ImageIcon, RefreshCw } from 'lucide-react';
import ExploreGrid from '../../shared/components/ExploreGrid';
import RandomButton from '../../shared/components/RandomButton';
import ArtistBadge from '../../shared/components/ArtistBadge';
import { useExploreFeed } from '../../shared/hooks/useExploreFeed';
import { useRandomPicks } from '../../shared/hooks/useRandomPicks';
import ImageCard from '../../shared/components/ImageCard';

const Galeria: React.FC = () => {
  const {
    items,
    displayItems,
    isLoading,
    isFetchingNextPage,
    registerSentinel,
    refresh,
  } = useExploreFeed({ pageSize: 20, rootMargin: '300px' });

  const {
    highlight,
    highlightLoading,
    highlightError,
    refreshHighlight,
    randomItems,
    randomLoading,
    randomMessage,
    loadRandomItems,
  } = useRandomPicks(8);

  return (
    <div className="page-container gallery-page">
      <h1>Galeria</h1>

      <CardDream className="gallery-card">
        <header className="gallery-card__header">
          <div className="gallery-card__title">
            <ImageIcon aria-hidden className="tab-icon" />
            <strong>Destaque aleatório</strong>
          </div>
          <button
            className="dm-button dm-button--ghost"
            onClick={() => refreshHighlight()}
            disabled={highlightLoading}
            aria-busy={highlightLoading}
          >
            <RefreshCw className="tab-icon" aria-hidden /> {highlightLoading ? 'Carregando…' : 'Outra obra'}
          </button>
        </header>

        <div className="gallery-highlight" aria-live="polite">
          {highlightLoading && (
            <div className="gallery-highlight__skeleton" aria-hidden>
              <div className="skeleton" />
              <div className="skeleton-line" />
            </div>
          )}

          {highlightError && (
            <p className="gallery-card__status" role="status">Estamos exibindo um destaque temporário enquanto recarregamos as obras.</p>
          )}

          {highlight && (
            <div className="gallery-highlight__media">
              <ImageCard image={highlight} className="gallery-highlight__image" showArtistOnHover={false} />
              <div className="gallery-highlight__meta">
                <p className="gallery-highlight__title">{highlight.title || highlight.image_name || 'Obra sem título'}</p>
                <ArtistBadge name={highlight.author} />
              </div>
            </div>
          )}
        </div>
      </CardDream>

      <CardDream className="gallery-card">
        <header className="gallery-card__header">
          <strong>Descubra mais</strong>
          <div className="gallery-card__actions">
            <button className="dm-button dm-button--ghost" onClick={() => refresh()} aria-busy={isFetchingNextPage}>
              <RefreshCw className="tab-icon" aria-hidden /> Atualizar feed
            </button>
            <RandomButton onClick={loadRandomItems} loading={randomLoading}>
              Estou com sorte
            </RandomButton>
          </div>
        </header>

        {randomMessage && (
          <p className="gallery-card__status" role="status">{randomMessage}</p>
        )}

        <div className="gallery-random">
          <ExploreGrid images={randomItems} isLoading={randomLoading && randomItems.length === 0} skeletonCount={4} showArtistOnHover />
        </div>
      </CardDream>

      <section className="gallery-feed" aria-label="Grade de obras">
        <ExploreGrid
          images={displayItems}
          isLoading={isLoading && items.length === 0}
          registerSentinel={registerSentinel}
          skeletonCount={8}
        />

        {isFetchingNextPage && <p className="gallery-feed__status" role="status">Carregando mais obras…</p>}
      </section>
    </div>
  );
};

export default Galeria;
