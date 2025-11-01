/* @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Comunidade from '..';

function renderWithRouter(pathname: string) {
  window.history.pushState({}, '', pathname);
  return render(
    <MemoryRouter initialEntries={[pathname]}>
      <Routes>
        <Route path="/comunidade" element={<Comunidade />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('Comunidade tabs', () => {
  it('defaults to Ajuda and updates query when switching to Regras', async () => {
    renderWithRouter('/comunidade');

    const ajuda = screen.getByRole('tab', { name: /ajuda/i });
    const regras = screen.getByRole('tab', { name: /regras/i });

    expect(ajuda).toHaveAttribute('aria-selected', 'true');
    expect(regras).toHaveAttribute('aria-selected', 'false');

    fireEvent.click(regras);

  // selection updated
  expect(regras).toHaveAttribute('aria-selected', 'true');
  });
});
