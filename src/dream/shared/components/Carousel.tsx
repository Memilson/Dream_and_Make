import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../api/http';
import { ImageSchema } from '../../api/types';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

interface CarouselProps {
  autoMs?: number;
  className?: string;
  count?: number; // how many images to load
}

const Carousel: React.FC<CarouselProps> = ({ autoMs = 4500, className = '', count = 5 }) => {
  const { data: images = [], isLoading } = useQuery({
    queryKey: ['carousel-images', count],
    queryFn: async () => {
      // Use pagination to simulate a set
      const list = await get(`/images?page=1&limit=${count}`, ImageSchema.array());
      return list;
    },
  });

  const [idx, setIdx] = React.useState(0);
  const total = images.length;

  // auto-advance
  React.useEffect(() => {
    if (!total) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % total), autoMs);
    return () => clearInterval(id);
  }, [autoMs, total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className={`carousel ${className}`.trim()} aria-roledescription="carousel">
      <div className="viewport ratio-16x9">
        {isLoading && <div className="skeleton" style={{ width: '100%', height: '100%' }} />}
        {images.map((img, i) => (
          <figure key={img.id} className={`slide ${i === idx ? 'is-active' : ''}`.trim()} aria-hidden={i !== idx}>
            <img src={img.image_url} alt={img.image_name || img.title || 'Imagem'} />
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
