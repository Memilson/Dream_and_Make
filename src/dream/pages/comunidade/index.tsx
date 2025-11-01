import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardDream from '../../components/CardDream';
import { faq } from '../../content/faq';

type Tab = 'ajuda' | 'regras';

const Comunidade: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getInitialTab = (): Tab => {
    const params = new URLSearchParams(location.search);
    const t = params.get('tab');
    return (t === 'regras' ? 'regras' : 'ajuda');
  };

  const [tab, setTab] = React.useState<Tab>(getInitialTab);

  React.useEffect(() => {
    setTab(getInitialTab());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const handleTab = (next: Tab) => {
    setTab(next);
    const params = new URLSearchParams(location.search);
    params.set('tab', next);
    navigate({ pathname: '/comunidade', search: `?${params.toString()}` }, { replace: true });
  };

  return (
    <div className="page-container">
      <h1>Comunidade</h1>

      <CardDream style={{ marginTop: 12 }}>
        <p>Encontre ajuda e conheça as regras da comunidade.</p>

        <div role="tablist" aria-label="Seções da comunidade" style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          <button
            role="tab"
            aria-selected={tab === 'ajuda'}
            className={`dm-button ${tab === 'ajuda' ? '' : 'dm-button--ghost'}`.trim()}
            onClick={() => handleTab('ajuda')}
          >
            Ajuda
          </button>
          <button
            role="tab"
            aria-selected={tab === 'regras'}
            className={`dm-button ${tab === 'regras' ? '' : 'dm-button--ghost'}`.trim()}
            onClick={() => handleTab('regras')}
          >
            Regras
          </button>
        </div>
      </CardDream>

      {tab === 'ajuda' && (
        <div style={{ marginTop: 16 }}>
          <CardDream>
            <strong>Precisa de suporte?</strong>
            <p style={{ marginTop: 6 }}>
              Escreva para <a href="mailto:angelolealpl14@gmail.com">angelolealpl14@gmail.com</a>.
            </p>
          </CardDream>

          <div style={{ marginTop: 16 }}>
            {faq.map((item, idx) => (
              <CardDream key={idx} style={{ marginBottom: 12 }}>
                <strong>{item.q}</strong>
                <p style={{ color: 'var(--muted)', marginTop: 6 }}>{item.a}</p>
              </CardDream>
            ))}
          </div>
        </div>
      )}

      {tab === 'regras' && (
        <div style={{ marginTop: 16 }}>
          <CardDream>
            <h2>Regras de Convivência</h2>
            <ul style={{ marginTop: 8 }}>
              <li>Respeite todas as pessoas e suas criações.</li>
              <li>Sem spam ou conteúdo ofensivo.</li>
              <li>Críticas construtivas são bem-vindas.</li>
            </ul>
          </CardDream>
        </div>
      )}
    </div>
  );
};

export default Comunidade;
