import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import logoUrl from '../styles/logo.svg';

function setFavicon() {
  try {
    const linkId = 'app-favicon';
    let link = document.querySelector<HTMLLinkElement>(`link#${linkId}`);
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'icon';
      link.type = 'image/svg+xml';
      document.head.appendChild(link);
    }
    link.href = logoUrl;
  } catch (e) {
    // non-blocking
    console.warn('[favicon] failed to set', e);
  }
}

function startMockingIfEnabled() {
  try {
    if (!import.meta.env.DEV) return;
    if (import.meta.env.VITE_ENABLE_MSW !== 'true') return;
    // Fire and forget to avoid blocking initial render
    import('../api/mocks/browser').then(({ worker }) => {
      worker.start({ onUnhandledRequest: 'bypass' }).catch((e) => {
        console.warn('[MSW] failed to start, continuing without mocks:', e);
      });
    }).catch((e) => console.warn('[MSW] failed to import, continuing without mocks:', e));
  } catch (e) {
    console.warn('[MSW] setup error, continuing without mocks:', e);
  }
}

function main() {
  const container = document.getElementById('root');
  if (!container) return;
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  setFavicon();
  startMockingIfEnabled();
}

main();