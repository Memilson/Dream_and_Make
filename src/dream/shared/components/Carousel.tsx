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
  maxHeight?: number | string; // clamp height to avoid obstructing layout
}

const Carousel: React.FC<CarouselProps> = ({ autoMs = 4500, className = '', count = 5, maxHeight = 'min(52vh, 520px)' }) => {
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
  const [dims, setDims] = React.useState<Record<number, { w: number; h: number }>>({});
  const total = images.length;

  // auto-advance
  React.useEffect(() => {
    if (!total) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % total), autoMs);
    return () => clearInterval(id);
  }, [autoMs, total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const currentRatio = dims[idx] ? `${dims[idx].w} / ${dims[idx].h}` : undefined;

  const maxH = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
  return (
    <div className={`carousel ${className}`.trim()} aria-roledescription="carousel">
      <div className="viewport ratio-16x9" style={{ aspectRatio: currentRatio, maxHeight: maxH }}>
  {(isLoading && !images.length) && <div className="skeleton" style={{ width: '100%', height: '100%' }} />}
        {images.map((img, i) => (
          <figure key={img.id} className={`slide ${i === idx ? 'is-active' : ''}`.trim()} aria-hidden={i !== idx}>
            <img
              src={img.image_url}
              alt={img.image_name || img.title || 'Imagem'}
              onLoad={(e) => {
                const el = e.currentTarget;
                setDims((d) => ({ ...d, [i]: { w: el.naturalWidth || 1, h: el.naturalHeight || 1 } }));
              }}
            />
            <figcaption className="overlay">
              <span className="caption"><User className="tab-icon" aria-hidden />{img.author}</span>
            </figcaption>
          </figure>
        ))}
        {total > 0 && (
          <div className="nav" aria-hidden>
            <button type="button" onClick={prev} aria-label="Anterior"><ChevronLeft size={18} aria-hidden /></button>
            <button type="button" onClick={next} aria-label="Próximo"><ChevronRight size={18} aria-hidden /></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
