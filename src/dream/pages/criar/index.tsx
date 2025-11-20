import React from 'react';
import { Link } from 'react-router-dom';
import CardDream from '../../components/CardDream';
import { Tabs } from '../../shared/components/Tabs';
import { useSyncedTab } from '../../shared/hooks/useSyncedTab';
import { Info, Upload, UploadCloud, ImagePlus, Music } from 'lucide-react';

const Criar: React.FC = () => {
  type Tab = 'visao-geral' | 'enviar';

  const { tab, setTab } = useSyncedTab<Tab>({
    values: ['visao-geral', 'enviar'],
    defaultValue: 'visao-geral',
    basePath: '/criar',
  });

  const irParaEnvio = () => {
    setTab('enviar');
  };

  return (
    <div className="page-container">
      <CardDream>
        <h1>Criar</h1>
        <p className="text-muted mt-8">
          Mostre o que você imagina — imagens, ilustrações e músicas que contam um pedaço da sua história.
        </p>

        <Tabs<Tab>
          aria-label="Ações de criação"
          items={[
            { id: 'visao-geral', label: 'Visão geral', icon: Info },
            { id: 'enviar', label: 'Enviar obra', icon: Upload },
          ]}
          active={tab}
          onChange={setTab}
        />
      </CardDream>

      {/* VISÃO GERAL  */}
      {tab === 'visao-geral' && (
        <div className="grid-auto-fit mt-12">
          {/* Coluna 1: Sobre o espaço */}
          <CardDream>
            <h2>Um lugar para seus sonhos</h2>
            <p className="text-muted mt-8">
              Pense nisso como um mural vivo: cada obra que você envia é um ponto de luz no meio
              de outras pessoas que também estão criando, tentando, errando e recomeçando.
            </p>

            <ul className="list mt-12">
              <li className="flex-row gap-12">
                <ImagePlus className="li-icon" aria-hidden />
                <span>
                  Imagens, ilustrações, fotografias — tudo que traduza um sentimento, uma ideia
                  ou um momento.
                </span>
              </li>
              <li className="flex-row gap-12">
                <Music className="li-icon" aria-hidden />
                <span>
                  Músicas, trilhas, experimentos sonoros — vale desde um rascunho até algo pronto.
                </span>
              </li>
              <li className="flex-row gap-12">
                <Upload className="li-icon" aria-hidden />
                <span>
                  Você pode começar com pouco: um título simples, seu nome ou apelido, e o arquivo.
                </span>
              </li>
            </ul>

            <div className="flex-row gap-12 mt-16 wrap">
              <span className="badge">
                <ImagePlus className="tab-icon" aria-hidden /> Imagens & artes visuais
              </span>
              <span className="badge">
                <Music className="tab-icon" aria-hidden /> Trilhas & músicas
              </span>
            </div>

            <div className="flex-row mt-24">
              <button
                type="button"
                className="dm-button"
                onClick={irParaEnvio}
                aria-label="Começar a enviar minha primeira obra"
              >
                Começar a enviar
              </button>
            </div>
          </CardDream>

          {/* Coluna 2: Dicas rápidas (mais visual) */}
          <CardDream>
            <h2>Dicas para deixar bonito</h2>
            <p className="text-muted mt-8">
              Não precisa ser perfeito. Só precisa ser seu. Aqui vão algumas ideias para deixar
              sua obra mais clara para quem vê.
            </p>

            <ul className="list mt-12">
              <li className="flex-row gap-12">
                <ImagePlus className="li-icon" aria-hidden />
                <span>
                  Prefira imagens nítidas, sem marcas d&apos;água, e dê crédito se usar referências
                  ou colagens.
                </span>
              </li>
              <li className="flex-row gap-12">
                <Upload className="li-icon" aria-hidden />
                <span>
                  Um título simples já ajuda muito. Se quiser, conte em uma frase o que a obra
                  significa para você.
                </span>
              </li>
              <li className="flex-row gap-12">
                <Music className="li-icon" aria-hidden />
                <span>
                  Para áudio, use formatos comuns (<code>audio/*</code>) e tente manter um volume
                  equilibrado.
                </span>
              </li>
            </ul>
          </CardDream>
        </div>
      )}

      {/* ENVIAR */}
      {tab === 'enviar' && (
        <div className="center p-24">
          <CardDream className="max-w-900 w-100">
            <h2>Envie sua obra</h2>
            <p className="text-muted mt-8">
              Escolha uma imagem ou música que represente o que você está sentindo agora. Em breve,
              você poderá arrastar e soltar sua criação aqui para compartilhar com a comunidade.
            </p>

            {/* Área tipo Pinterest / dropzone */}
            <div className="dropzone mt-16" aria-disabled>
              <UploadCloud className="icon-lg" aria-hidden />
              <div className="text-muted mt-8">
                Arraste e solte sua obra aqui <br />
                <span className="text-soft">funcionalidade em construção</span>
              </div>

              <button
                type="button"
                className="dm-button mt-16"
                aria-label="Selecionar arquivo para enviar"
                disabled
              >
                Escolher arquivo
              </button>
            </div>

            <div className="flex-row gap-12 mt-20 wrap">
              <span className="badge">
                <ImagePlus className="tab-icon" aria-hidden /> PNG, JPG, WEBP
              </span>
              <span className="badge">
                <Music className="tab-icon" aria-hidden /> MP3, WAV, OGG
              </span>
            </div>

            <p className="text-muted mt-20">
              Mesmo antes do envio estar pronto, você já pode ir sonhando com o que vai colocar
              aqui: uma série de quadros, uma capa de álbum, um rascunho musical ou algo que você
              nunca teve coragem de mostrar.
            </p>
          </CardDream>
        </div>
      )}
    </div>
  );
};

export default Criar;
