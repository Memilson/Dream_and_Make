import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageShell } from '../PageShell';
import Loading from '../shared/components/Loading';

const Landing = lazy(() => import('../pages/home'));
const Explorar = lazy(() => import('../pages/explorar'));
const Criar = lazy(() => import('../pages/criar'));
const Comunidade = lazy(() => import('../pages/comunidade'));
const Sobre = lazy(() => import('../pages/sobre'));
const NotFound = lazy(() => import('../pages/not-found'));

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route element={<PageShell /> }>
                    <Route index element={<Landing />} />

                    {/* Explorar - visão unificada com tabs */}
                    <Route path="explorar">
                        <Route index element={<Explorar />} />
                    </Route>

                    {/* Criar */}
                    <Route path="criar">
                        <Route index element={<Criar />} />
                        <Route path="enviar" element={<Navigate to="/criar?tab=enviar" replace />} />
                    </Route>

                    {/* Comunidade - visão unificada com tabs */}
                    <Route path="comunidade">
                        <Route index element={<Comunidade />} />
                    </Route>

                    {/* Sobre */}
                    <Route path="sobre">
                        <Route index element={<Sobre />} />
                        <Route path="origem" element={<Sobre />} />
                    </Route>

                    {/* Redirects from legacy paths (somente os essenciais) */}
                    <Route path="envie" element={<Navigate to="/criar?tab=enviar" replace />} />
                    <Route path="crie-voce" element={<Navigate to="/criar" replace />} />
                    <Route path="core-values" element={<Navigate to="/sobre" replace />} />
                    <Route path="faq" element={<Navigate to="/comunidade?tab=ajuda" replace />} />
                    <Route path="changelog" element={<Navigate to="/sobre" replace />} />

                    <Route path="home" element={<Navigate to="/" replace />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;