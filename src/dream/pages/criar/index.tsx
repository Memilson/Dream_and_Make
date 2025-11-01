import React from 'react';
import { Link } from 'react-router-dom';
import CardDream from '../../components/CardDream';
import { Tabs } from '../../shared/components/Tabs';
import { useSyncedTab } from '../../shared/hooks/useSyncedTab';
import { Info, Upload, UploadCloud, ImagePlus, Music } from 'lucide-react';

const Criar: React.FC = () => {
  type Tab = 'visao-geral' | 'enviar';
  const { tab, setTab } = useSyncedTab<Tab>({ values: ['visao-geral', 'enviar'], defaultValue: 'visao-geral', basePath: '/criar' });
  return (
    <div className="page-container">
      <CardDream>
        <h1>Criar</h1>
        <p className="text-muted mt-8">Compartilhe suas obras com a comunidade — imagens e músicas são bem-vindas.</p>
        <Tabs<Tab>
          aria-label="Ações de criação"
          items={[
            { id: 'visao-geral', label: 'Visão geral', icon: Info },
            { id: 'enviar', label: 'Enviar', icon: Upload },
          ]}
          active={tab}
          onChange={setTab}
        />
      </CardDream>

      {tab === 'visao-geral' && (
        <div className="grid-auto-fit mt-12">
          <CardDream>
            <h2>Participe</h2>
            <p className="text-muted mt-8">Envie suas obras para a comunidade, receba feedback com gentileza e inspire outras pessoas.</p>
            <div className="flex-row gap-12 mt-12 wrap">
              <Link className="dm-button" to="/criar?tab=enviar" aria-label="Começar a mostrar meus sonhos">
                Começar a mostrar meus sonhos
              </Link>
            </div>
          </CardDream>
          <CardDream>
            <h2>Dicas rápidas</h2>
            <ul className="list mt-8">
              <li className="flex-row gap-12"><ImagePlus className="li-icon" aria-hidden /><span>Prefira imagens nítidas (sem marcas d’água, com crédito quando aplicável).</span></li>
              <li className="flex-row gap-12"><Upload className="li-icon" aria-hidden /> <span>Conte um pouco sobre você e sua obra (título, autor, contato opcional).</span></li>
              <li className="flex-row gap-12"><Music className="li-icon" aria-hidden /> <span>Para músicas, inclua um título e um arquivo de áudio (audio/*).</span></li>
            </ul>
          </CardDream>
        </div>
      )}

      {tab === 'enviar' && (
        <div className="center p-24">
          <CardDream className="max-w-900 w-100">
            <h2>Envie sua arte</h2>
            <div className="dropzone mt-12" aria-disabled>
              <UploadCloud className="icon-lg" aria-hidden />
              <div className="text-muted">Arraste e solte aqui — em breve</div>
            </div>
            <div className="flex-row gap-12 mt-16 wrap">
              <span className="badge"><ImagePlus className="tab-icon" aria-hidden /> Imagem</span>
              <span className="badge"><Music className="tab-icon" aria-hidden /> Áudio</span>
            </div>
          </CardDream>
        </div>
      )}
    </div>
  );
};

export default Criar;
