import a from '../styles/placeholders/images.jpg';
import b from '../styles/placeholders/images (1).jpg';
import c from '../styles/placeholders/kit_sol_e_lua_pinturas_oleo_sobre_tela_1407_3_29f2d57549f2e690932bf5d07049ef91.jpg';
import d from '../styles/placeholders/monalisa.jpg';
import type { Image } from './types';

const now = new Date().toISOString();

export const placeholderImages: Image[] = [
  { id: 1, author: 'Ana', image_url: a, image_name: 'Montanha', created_at: now },
  { id: 2, author: 'Bruno', image_url: b, image_name: 'Cão', created_at: now },
  { id: 3, author: 'Clara', image_url: c, image_name: 'Cidade', created_at: now },
  { id: 4, author: 'Diego', image_url: d, image_name: 'Retrato', created_at: now },
];

// Utility to expand placeholders to an arbitrary length by cycling through them
export function expandPlaceholders(n: number): Image[] {
  const out: Image[] = [];
  for (let i = 0; i < n; i++) {
    const base = placeholderImages[i % placeholderImages.length];
    out.push({ ...base, id: 1000 + i });
  }
  return out;
}
