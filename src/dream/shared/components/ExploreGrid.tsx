import React from 'react';
import type { Image } from '../../api/types';
import ImageCard from './ImageCard';

interface ExploreGridProps {
  images: Image[];
  className?: string;
  isLoading?: boolean;
  skeletonCount?: number;
  registerSentinel?: (node: HTMLDivElement | null) => void;
  emptyMessage?: string;
  showArtistOnHover?: boolean;
}

const ExploreGrid: React.FC<ExploreGridProps> = ({
  images,
  className = '',
  isLoading = false,
  skeletonCount = 6,
  registerSentinel = () => undefined,
  emptyMessage = 'Sem obras disponíveis no momento.',
  showArtistOnHover = true,
}) => {
  const placeholders = React.useMemo(() => Array.from({ length: skeletonCount }), [skeletonCount]);

  return (
    <div className={`explore-grid ${className}`.trim()}>
      <div className="explore-grid__masonry" data-testid="explore-grid">
        {images.map((item) => (
          <ImageCard key={item.id} image={item} showArtistOnHover={showArtistOnHover} />
        ))}
        {isLoading && placeholders.map((_, index) => (
          <div key={`skeleton-${index}`} className="image-card image-card--skeleton" aria-hidden>
            <div className="image-card__media">
              <div className="image-card__skeleton" />
            </div>
          </div>
        ))}
        {!isLoading && images.length === 0 && (
          <p className="explore-grid__empty" role="status">{emptyMessage}</p>
        )}
      </div>
      <div ref={registerSentinel} className="explore-grid__sentinel" aria-hidden />
    </div>
  );
};

export default ExploreGrid;
