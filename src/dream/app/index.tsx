import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

async function enableMocking() {
  if (!import.meta.env.DEV) return;
  const { worker } = await import('../api/mocks/browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
}

async function main() {
  await enableMocking();
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

main();