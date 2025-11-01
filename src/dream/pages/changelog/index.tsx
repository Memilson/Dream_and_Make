import React from 'react';
import { changelog } from '../../content/changelog';
import CardDream from '../../components/CardDream';

const Changelog: React.FC = () => {
  return (
    <div className="page-container">
      <CardDream>
        <h1>Atualizações</h1>
        <p style={{ color: 'var(--muted)', marginTop: 12 }}>{changelog.message}</p>
      </CardDream>

      <CardDream>
        <h2>O que vem por aí</h2>
        <p style={{ color: 'var(--muted)', marginTop: 8 }}>
          Nosso roadmap continua em evolução. Veja algumas das iniciativas que já estamos desenvolvendo para turbinar a
          plataforma:
        </p>
        <ul style={{ marginTop: 16 }}>
          {changelog.backlog.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      </CardDream>
    </div>
  );
};

export default Changelog;
