import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../api/http';
import { ImageSchema } from '../../api/types';
import { placeholderImages } from '../../api/placeholders';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

interface CarouselProps {
  autoMs?: number;
  className?: string;
  count?: number; // how many images to load
  maxHeight?: number; // px
  minHeight?: number; // px
  maxWidth?: number;  // px
  showIndicators?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  autoMs = 4500,
  className = '',
  count = 5,
  maxHeight = 520,
  minHeight = 260,
  maxWidth = 640,
  showIndicators = true,
}) => {
  const { data: fetched = [], isLoading, isError } = useQuery({
    queryKey: ['carousel-images', count],
    queryFn: async () => {
      // Use local seed images for hero carousel
      const list = await get(`/images`, ImageSchema.array());
      // limit to requested count if provided
      if (count && list.length > count) return list.slice(0, count);
      return list;
    },
    retry: false,
  });
  const images = (isError || fetched.length === 0) ? placeholderImages.slice(0, count) : fetched;

  const [idx, setIdx] = React.useState(0);
  // (kept simple) no need to measure natural dimensions when using CSS background contain
  const total = images.length;

  // auto-advance
  React.useEffect(() => {
    if (!total) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % total), autoMs);
    return () => clearInterval(id);
  }, [autoMs, total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') { prev(); }
    if (e.key === 'ArrowRight') { next(); }
  };

  return (
    <div
      className={`carousel ${className}`.trim()}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKey}
    >
      <div
        className="viewport"
        style={{
          height: `clamp(${minHeight}px, 45vh, ${maxHeight}px)`,
          maxWidth: `${maxWidth}px`,
          width: '100%',
          marginInline: 'auto',
        }}
      >
        {(isLoading && !images.length) && <div className="skeleton" style={{ width: '100%', height: '100%' }} />}
        {images.map((img, i) => (
          <figure key={img.id} className={`slide ${i === idx ? 'is-active' : ''}`.trim()} aria-hidden={i !== idx}>
            <div
              className="media"
              role="img"
              aria-label={(img.image_name || img.title || 'Imagem')}
              style={{ backgroundImage: `url(${img.image_url})` }}
            />
            <figcaption className="overlay">
              <div className="meta">
                <div className="meta-title">{img.title || img.image_name}</div>
                <div className="meta-sub"><User className="tab-icon" aria-hidden />{img.author}</div>
              </div>
            </figcaption>
          </figure>
        ))}
        {total > 0 && (
          <div className="nav" aria-hidden>
            <button type="button" onClick={prev} aria-label="Anterior"><ChevronLeft size={18} aria-hidden /></button>
            <button type="button" onClick={next} aria-label="Próximo"><ChevronRight size={18} aria-hidden /></button>
          </div>
        )}
        {showIndicators && total > 1 && (
          <div className="indicators" role="tablist" aria-label="Slides">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={`Ir para slide ${i + 1}`}
                className={`dot ${i === idx ? 'is-active' : ''}`.trim()}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
