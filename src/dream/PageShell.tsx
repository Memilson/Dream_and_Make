import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const PageShell: React.FC = () => {
  return (
    <div className="page-shell">
      <header className="site-header" role="banner">
        <div className="header-inner">
          <div className="logo">Dream and Make</div>
          <nav className="nav" role="navigation" aria-label="Main">
            <NavLink to="/explorar">Explorar</NavLink>
            <NavLink to="/galeria">Galeria</NavLink>
            <NavLink to="/musicas">Músicas</NavLink>
            <NavLink to="/envie">Envie sua arte</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/ajuda">Ajuda</NavLink>
            <NavLink to="/core-values">Core Values</NavLink>
            <NavLink to="/crie-voce">Crie Você</NavLink>
            <NavLink to="/sobre">Sobre Nós</NavLink>
            <NavLink to="/regras">Regras</NavLink>
            <NavLink to="/changelog">Changelog</NavLink>
          </nav>
        </div>
      </header>
      <div className="page-container">
        <p className="tagline">Celebrando a Arte, Elevando Vozes...</p>
        <Outlet />
      </div>
    </div>
  );
};
