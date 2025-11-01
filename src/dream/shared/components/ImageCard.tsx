import React from 'react';
import type { Image } from '../../api/types';
import { placeholderImages } from '../../api/placeholders';
import { getSafeImageUrl } from '../../utils';
import ArtistBadge from './ArtistBadge';

interface ImageCardProps {
  image: Image;
  className?: string;
  priority?: boolean;
  showArtistOnHover?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  className = '',
  priority = false,
  showArtistOnHover = true,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const safeUrl = React.useMemo(
    () => getSafeImageUrl(image.image_url, placeholderImages[0]?.image_url ?? ''),
    [image.image_url],
  );
  const title = image.image_name || image.title || 'Obra sem título';

  React.useEffect(() => {
    if (!safeUrl) {
      setIsLoaded(true);
    }
  }, [safeUrl]);

  return (
    <figure className={`image-card ${isLoaded ? 'is-loaded' : ''} ${className}`.trim()}>
      <div className="image-card__media">
        {!isLoaded && <div className="image-card__skeleton" aria-hidden />}
        {safeUrl && (
          <img
            src={safeUrl}
            srcSet={`${safeUrl} 1x, ${safeUrl} 2x`}
            sizes="(max-width: 640px) 100vw, 320px"
            alt={`${title} · por ${image.author}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </div>
      <figcaption className={`image-card__overlay ${showArtistOnHover ? '' : 'is-visible'}`.trim()} aria-hidden={!showArtistOnHover}>
        <ArtistBadge name={image.author} />
      </figcaption>
    </figure>
  );
};

export default ImageCard;
