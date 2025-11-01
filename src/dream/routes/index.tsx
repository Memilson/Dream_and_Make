import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageShell } from '../PageShell';

const Landing = lazy(() => import('../pages/home'));
const Explorar = lazy(() => import('../pages/explorar'));
const Galeria = lazy(() => import('../pages/galeria'));
const Musicas = lazy(() => import('../pages/musicas'));
const Criar = lazy(() => import('../pages/criar'));
const Envie = lazy(() => import('../pages/envie'));
const Comunidade = lazy(() => import('../pages/comunidade'));
const Ajuda = lazy(() => import('../pages/ajuda'));
const Regras = lazy(() => import('../pages/regras'));
const Sobre = lazy(() => import('../pages/sobre'));
const NotFound = lazy(() => import('../pages/not-found'));

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<div className="page-container">Carregando…</div>}>
            <Routes>
                <Route element={<PageShell /> }>
                    <Route index element={<Landing />} />

                    {/* Explorar */}
                    <Route path="explorar">
                        <Route index element={<Explorar />} />
                        <Route path="galeria" element={<Galeria />} />
                        <Route path="musicas" element={<Musicas />} />
                    </Route>

                    {/* Criar */}
                    <Route path="criar">
                        <Route index element={<Criar />} />
                        <Route path="enviar" element={<Envie />} />
                    </Route>

                    {/* Comunidade */}
                    <Route path="comunidade">
                        <Route index element={<Comunidade />} />
                        <Route path="ajuda" element={<Ajuda />} />
                        <Route path="regras" element={<Regras />} />
                    </Route>

                    {/* Sobre */}
                    <Route path="sobre">
                        <Route index element={<Sobre />} />
                        <Route path="origem" element={<Sobre />} />
                    </Route>

                    {/* Redirects from legacy paths */}
                    <Route path="galeria" element={<Navigate to="/explorar/galeria" replace />} />
                    <Route path="musicas" element={<Navigate to="/explorar/musicas" replace />} />
                    <Route path="envie" element={<Navigate to="/criar/enviar" replace />} />
                    <Route path="crie-voce" element={<Navigate to="/criar" replace />} />
                    <Route path="core-values" element={<Navigate to="/sobre" replace />} />
                    <Route path="ajuda" element={<Navigate to="/comunidade/ajuda" replace />} />
                    <Route path="regras" element={<Navigate to="/comunidade/regras" replace />} />
                    <Route path="faq" element={<Navigate to="/comunidade/ajuda" replace />} />
                    <Route path="changelog" element={<Navigate to="/sobre" replace />} />

                    <Route path="home" element={<Navigate to="/" replace />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;