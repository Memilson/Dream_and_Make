import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageShell } from './PageShell';

const Landing = lazy(() => import('./pages/home'));
const Explorar = lazy(() => import('./pages/explorar'));
const Galeria = lazy(() => import('./pages/galeria'));
const Musicas = lazy(() => import('./pages/musicas'));
const Envie = lazy(() => import('./pages/envie'));
const FAQ = lazy(() => import('./pages/faq'));
const Ajuda = lazy(() => import('./pages/ajuda'));
const CoreValues = lazy(() => import('./pages/core-values'));
const CrieVoce = lazy(() => import('./pages/crie-voce'));
const Sobre = lazy(() => import('./pages/sobre'));
const Changelog = lazy(() => import('./pages/changelog'));
const Regras = lazy(() => import('./pages/regras'));
const NotFound = lazy(() => import('./pages/not-found'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div className="page-container">Carregando…</div>}>
      <Routes>
        <Route element={<PageShell /> }>
          <Route index element={<Landing />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="/envie" element={<Envie />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/crie-voce" element={<CrieVoce />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/regras" element={<Regras />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
