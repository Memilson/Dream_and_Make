import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardDream from '../../components/CardDream';
import Galeria from '../galeria';
import Musicas from '../musicas';

const Explorar: React.FC = () => {
  type Tab = 'galeria' | 'musicas';

  const location = useLocation();
  const navigate = useNavigate();

  const getInitialTab = (): Tab => {
    const p = new URLSearchParams(location.search);
    const t = p.get('tab');
    return t === 'musicas' ? 'musicas' : 'galeria';
  };

  const [tab, setTab] = React.useState<Tab>(getInitialTab);

  React.useEffect(() => {
    setTab(getInitialTab());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const handleTab = (next: Tab) => {
    setTab(next);
    const p = new URLSearchParams(location.search);
    p.set('tab', next);
    navigate({ pathname: '/explorar', search: `?${p.toString()}` }, { replace: true });
  };

  return (
    <div className="page-container">
      <CardDream style={{ maxWidth: 900 }}>
        <h1>Explorar</h1>
        <div role="tablist" aria-label="Explorar opções" style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          <button
            role="tab"
            aria-selected={tab === 'galeria'}
            className={`dm-button ${tab === 'galeria' ? '' : 'dm-button--ghost'}`.trim()}
            onClick={() => handleTab('galeria')}
          >
            Galeria
          </button>
          <button
            role="tab"
            aria-selected={tab === 'musicas'}
            className={`dm-button ${tab === 'musicas' ? '' : 'dm-button--ghost'}`.trim()}
            onClick={() => handleTab('musicas')}
          >
            Músicas
          </button>
        </div>
      </CardDream>

      <div style={{ marginTop: 16 }}>
        {tab === 'galeria' ? <Galeria /> : <Musicas />}
      </div>
    </div>
  );
};

export default Explorar;
