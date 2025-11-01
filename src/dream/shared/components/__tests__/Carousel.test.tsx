import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, expect, it, vi } from 'vitest';
import Carousel from '../Carousel';
import { placeholderImages } from '../../../api/placeholders';

vi.mock('../../../api/http', () => ({
  get: vi.fn(async () => placeholderImages),
}));

const renderWithClient = (ui: React.ReactElement) => {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(<QueryClientProvider client={client}>{ui}</QueryClientProvider>);
};

describe('Carousel', () => {
  it('renders navigation controls with accessible labels', async () => {
    renderWithClient(<Carousel autoMs={20000} />);

    const region = screen.getByRole('group', { name: /carrossel de destaques/i });
    expect(region).toBeInTheDocument();

    const nextButton = await screen.findByRole('button', { name: /próximo slide/i });
    const prevButton = screen.getByRole('button', { name: /slide anterior/i });

    expect(nextButton).toBeVisible();
    expect(prevButton).toBeVisible();
  });

  it('exposes progress information for assistive technologies', async () => {
    renderWithClient(<Carousel autoMs={20000} />);

    await screen.findAllByRole('img');
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
  });

  it('supports keyboard navigation', async () => {
    renderWithClient(<Carousel autoMs={20000} />);

    const viewport = screen.getByRole('group', { name: /carrossel de destaques/i });
    await screen.findByRole('img');
    const before = screen
      .getAllByRole('tab')
      .findIndex((tab) => tab.getAttribute('aria-selected') === 'true');

    fireEvent.keyDown(viewport, { key: 'ArrowRight' });

    await waitFor(() => {
      const after = screen
        .getAllByRole('tab')
        .findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
      expect(after).not.toEqual(before);
    });
  });
});
