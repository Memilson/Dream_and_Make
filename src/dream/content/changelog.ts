export const changelog = {
  versions: [
    {
      version: 'Alpha 1.0',
      items: [
        'Setup inicial em Vite + React 18 + TypeScript',
        'Tema unificado com variáveis CSS',
        'Layout base e navegação'
      ]
    },
    {
      version: 'Alpha 1.5',
      items: [
        'Rotas com code-splitting (lazy + Suspense)',
        'Componentes base (CardDream, Modal)'
      ]
    },
    {
      version: 'Alpha 2.0',
      items: [
        'Integração com API (Images, Comments, Musica) usando React Query e Zod',
        'Mock MSW opcional'
      ]
    }
  ],
  backlog: [
    'PWA (manifest + service worker)',
    'Virtualização de listas longas',
    'Prefetch de rotação no hover'
  ]
};
