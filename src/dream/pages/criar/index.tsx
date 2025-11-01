import React from 'react';
import { Link } from 'react-router-dom';
import CardDream from '../../components/CardDream';
import { Tabs } from '../../shared/components/Tabs';
import { useSyncedTab } from '../../shared/hooks/useSyncedTab';

const Criar: React.FC = () => {
  type Tab = 'visao-geral' | 'enviar';
  const { tab, setTab } = useSyncedTab<Tab>({ values: ['visao-geral', 'enviar'], defaultValue: 'visao-geral', basePath: '/criar' });
  return (
    <div className="page-container">
      <CardDream>
        <h1>Criar</h1>
        <Tabs<Tab>
          aria-label="Ações de criação"
          items={[
            { id: 'visao-geral', label: 'Visão geral' },
            { id: 'enviar', label: 'Enviar' },
          ]}
          active={tab}
          onChange={setTab}
        />
      </CardDream>

      {tab === 'visao-geral' && (
        <CardDream className="mt-12">
          <p>Participe: envie suas obras para a comunidade.</p>
          <div className="flex-row gap-12 mt-12 wrap">
            <Link className="dm-button" to="/criar?tab=enviar" aria-label="Começar a mostrar meus sonhos">
              Começar a mostrar meus sonhos
            </Link>
          </div>
        </CardDream>
      )}

      {tab === 'enviar' && (
        <div className="center" style={{ padding: 24 }}>
          <CardDream className="max-w-900 w-100">
            <h2>Envie sua arte</h2>
            <p className="text-muted">Em breve: formulário de upload de imagem + contato.</p>
          </CardDream>
        </div>
      )}
    </div>
  );
};

export default Criar;
