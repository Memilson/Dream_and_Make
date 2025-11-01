import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const links = [
  { to: '/explorar', label: 'Explorar' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/musicas', label: 'Músicas' },
  { to: '/envie', label: 'Envie sua arte' },
  { to: '/faq', label: 'FAQ' },
  { to: '/ajuda', label: 'Ajuda' },
  { to: '/core-values', label: 'Core Values' },
  { to: '/crie-voce', label: 'Crie Você' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/regras', label: 'Regras' },
  { to: '/changelog', label: 'Atualizações' }
];

export const PageShell: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleNavigate = () => setMenuOpen(false);

  return (
    <div className="dream-app">
      <header className="site-header" role="banner">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            <span className="logo-mark" aria-hidden>◆</span>
            Dream and Make
          </NavLink>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={`nav ${menuOpen ? 'is-open' : ''}`.trim()}
            role="navigation"
            aria-label="Principal"
          >
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={handleNavigate}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="app-main">
        <div className="page-intro">
          <p className="eyebrow">Celebrando a Arte, Elevando Vozes</p>
          <h1 className="page-title">Dream and Make</h1>
          <p className="tagline">
            Uma experiência criativa para descobrir talentos, apoiar artistas e compartilhar o que te inspira.
          </p>
        </div>

        <div className="page-content">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Dream and Make. Cultivando sonhos coletivos.</span>
      </footer>
    </div>
  );
};
