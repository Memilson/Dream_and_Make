import React from 'react';
import { User } from 'lucide-react';

interface ArtistBadgeProps {
  name: string;
  className?: string;
}

const ArtistBadge: React.FC<ArtistBadgeProps> = ({ name, className = '' }) => (
  <span className={`artist-badge ${className}`.trim()}>
    <User className="artist-badge__icon" aria-hidden />
    <span className="artist-badge__name">{name}</span>
  </span>
);

export default ArtistBadge;
