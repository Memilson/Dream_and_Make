import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// Navegação principal simplificada: Explorar | Criar | Comunidade | Sobre
const navGroups = [
  {
    to: '/explorar',
    label: 'Explorar',
    children: [
      { to: '/explorar/galeria', label: 'Galeria' },
      { to: '/explorar/musicas', label: 'Músicas' },
    ],
  },
  {
    to: '/criar',
    label: 'Criar',
    children: [
      { to: '/criar/enviar', label: 'Enviar' },
    ],
  },
  {
    to: '/comunidade',
    label: 'Comunidade',
    children: [
      { to: '/comunidade/ajuda', label: 'Ajuda' },
      { to: '/comunidade/regras', label: 'Regras' },
    ],
  },
  {
    to: '/sobre',
    label: 'Sobre',
    children: [
      { to: '/sobre', label: 'Origem' },
    ],
  },
] as const;

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
            {navGroups.map((group) => (
              <div className="nav-item" key={group.to}>
                <NavLink className="nav-link" to={group.to} onClick={handleNavigate} aria-haspopup="true">
                  {group.label}
                </NavLink>
                <div className="submenu" role="menu">
                  {group.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={handleNavigate}
                      role="menuitem"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
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
