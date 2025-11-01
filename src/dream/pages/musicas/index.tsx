import React from 'react';
import CardDream from '../../components/CardDream';

const Musicas: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Músicas</h1>
      <CardDream style={{ marginTop: 12 }}>
        <p>Em breve: upload de áudio e players por faixa.</p>
      </CardDream>
    </div>
  );
};

export default Musicas;
