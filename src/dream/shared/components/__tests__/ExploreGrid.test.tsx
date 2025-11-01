import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ExploreGrid from '../ExploreGrid';
import type { Image } from '../../../api/types';

const sampleImage: Image = {
  id: 99,
  author: 'Teste',
  image_url: 'https://picsum.photos/400/300',
  image_name: 'Horizonte',
  created_at: new Date().toISOString(),
};

describe('ExploreGrid', () => {
  it('renders image cards for provided content', () => {
    render(<ExploreGrid images={[sampleImage]} />);

    const image = screen.getByRole('img', { name: /horizonte/i });
    expect(image).toBeInTheDocument();
  });

  it('shows an empty state when no images are available', () => {
    render(<ExploreGrid images={[]} isLoading={false} />);

    expect(screen.getByRole('status')).toHaveTextContent(/sem obras/i);
  });
});
