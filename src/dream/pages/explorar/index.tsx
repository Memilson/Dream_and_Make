import React from 'react';
import CardDream from '../../components/CardDream';
import Galeria from '../galeria';
import Musicas from '../musicas';
import { useSyncedTab } from '../../shared/hooks/useSyncedTab';
import { Tabs } from '../../shared/components/Tabs';

const Explorar: React.FC = () => {
  type Tab = 'galeria' | 'musicas';
  const { tab, setTab } = useSyncedTab<Tab>({ values: ['galeria', 'musicas'], defaultValue: 'galeria', basePath: '/explorar' });

  return (
    <div className="page-container">
      <CardDream className="max-w-900">
        <h1>Explorar</h1>
        <Tabs<Tab>
          aria-label="Explorar opções"
          items={[
            { id: 'galeria', label: 'Galeria' },
            { id: 'musicas', label: 'Músicas' },
          ]}
          active={tab}
          onChange={setTab}
        />
      </CardDream>

      <div className="mt-16">
        {tab === 'galeria' ? <Galeria /> : <Musicas />}
      </div>
    </div>
  );
};

export default Explorar;
