import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Compass, Upload, Users, Info } from 'lucide-react';
import logoUrl from './styles/logo.svg';

// Navegação principal simplificada: Explorar | Criar | Comunidade | Sobre
type NavChild = { to: string; label: string };
type NavGroup = { to: string; label: string; icon: React.ComponentType<{ className?: string }>; children: NavChild[] };
const navGroups: NavGroup[] = [
  { to: '/explorar', label: 'Explorar', icon: Compass, children: [] },
  { to: '/criar', label: 'Criar', icon: Upload, children: [] },
  { to: '/comunidade', label: 'Comunidade', icon: Users, children: [] },
  { to: '/sobre', label: 'Sobre', icon: Info, children: [] },
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
            <img src={logoUrl} className="logo-img" alt="" aria-hidden />
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
          <nav className={`nav nav--segmented ${menuOpen ? 'is-open' : ''}`.trim()} role="navigation" aria-label="Principal">
            <div className="nav-rail">
              {navGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div className="nav-item" key={group.to}>
                    <NavLink className="nav-link" to={group.to} onClick={handleNavigate} aria-haspopup={group.children.length > 0 || undefined}>
                      <Icon className="nav-icon" aria-hidden />
                      <span>{group.label}</span>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      <main className="app-main">
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
