import React from 'react';
import CardDream from '../../components/CardDream';
import { faq } from '../../content/faq';
import { useSyncedTab } from '../../shared/hooks/useSyncedTab';
import { Tabs } from '../../shared/components/Tabs';

type Tab = 'ajuda' | 'regras';

const Comunidade: React.FC = () => {
  const { tab, setTab } = useSyncedTab<Tab>({ values: ['ajuda', 'regras'], defaultValue: 'ajuda', basePath: '/comunidade' });

  return (
    <div className="page-container">
      <h1>Comunidade</h1>

      <CardDream className="mt-12">
        <p>Encontre ajuda e conheça as regras da comunidade.</p>
        <Tabs<Tab>
          aria-label="Seções da comunidade"
          items={[
            { id: 'ajuda', label: 'Ajuda' },
            { id: 'regras', label: 'Regras' },
          ]}
          active={tab}
          onChange={setTab}
        />
      </CardDream>

      {tab === 'ajuda' && (
        <div className="mt-16">
          <CardDream>
            <strong>Precisa de suporte?</strong>
            <p className="mt-8">
              Escreva para <a href="mailto:angelolealpl14@gmail.com">angelolealpl14@gmail.com</a>.
            </p>
          </CardDream>

          <div className="mt-16">
            {faq.map((item, idx) => (
              <CardDream key={idx} className="mt-12">
                <strong>{item.q}</strong>
                <p className="text-muted mt-8">{item.a}</p>
              </CardDream>
            ))}
          </div>
        </div>
      )}

      {tab === 'regras' && (
        <div className="mt-16">
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
