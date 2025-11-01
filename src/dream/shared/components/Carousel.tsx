import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArtistBadge from './ArtistBadge';
import { useCarousel, type UseCarouselOptions } from '../hooks/useCarousel';
import { getSafeImageUrl } from '../../utils';
import { placeholderImages } from '../../api/placeholders';

interface CarouselProps extends UseCarouselOptions {
  className?: string;
  showIndicators?: boolean;
  ariaLabel?: string;
  onIndexChange?: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  autoMs,
  className = '',
  count,
  showIndicators = true,
  ariaLabel = 'Carrossel de destaques',
  onIndexChange,
}) => {
  const {
    items,
    currentIndex,
    progress,
    isLoading,
    isError,
    next,
    prev,
    goTo,
    pause,
    resume,
  } = useCarousel({ autoMs, count });
  // Notify parent when slide changes (for synced hero text)
  React.useEffect(() => {
    if (typeof onIndexChange === 'function') {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange]);

  const total = items.length;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    }
  };

  return (
    <div className={`carousel ${className}`.trim()} data-state={isLoading ? 'loading' : isError ? 'error' : 'ready'}>
      <div
        className="carousel__viewport"
        role="group"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerEnter={pause}
        onPointerLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
        {isLoading && (
          <div className="carousel__skeleton" aria-hidden>
            <div className="carousel__skeleton-line" />
            <div className="carousel__skeleton-line" />
          </div>
        )}

        {items.map((item, index) => {
          const isActive = index === currentIndex;
          const title = item.title || item.image_name || 'Obra sem título';
          const safeUrl = getSafeImageUrl(item.image_url, placeholderImages[0]?.image_url ?? '');
          return (
            <figure
              key={item.id ?? `${title}-${index}`}
              className={`carousel__slide ${isActive ? 'is-active' : ''}`.trim()}
              aria-hidden={!isActive}
            >
              <img
                className="carousel__media"
                src={safeUrl}
                srcSet={`${safeUrl} 1x, ${safeUrl} 2x`}
                sizes="(max-width: 680px) 100vw, 640px"
                alt={`${title} · por ${item.author}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <figcaption className="carousel__caption" aria-live={isActive ? 'polite' : 'off'} aria-atomic="true">
                <div className="carousel__caption-inner">
                  <p className="carousel__title">{title}</p>
                  <ArtistBadge name={item.author} />
                </div>
              </figcaption>
            </figure>
          );
        })}

        {total > 1 && (
          <>
            <button type="button" className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Ver slide anterior">
              <ChevronLeft aria-hidden />
            </button>
            <button type="button" className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Ver próximo slide">
              <ChevronRight aria-hidden />
            </button>
          </>
        )}

        {showIndicators && total > 1 && (
          <div className="carousel__indicators" role="tablist" aria-label="Indicadores de slides">
            {items.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                className={`carousel__dot ${index === currentIndex ? 'is-active' : ''}`.trim()}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ir para o slide ${index + 1}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        )}

        {total > 1 && (
          <div
            className="carousel__progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            aria-hidden={false}
          >
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
