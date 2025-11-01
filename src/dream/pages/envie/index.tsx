import React from 'react';
import CardDream from '../../components/CardDream';

const Envie: React.FC = () => {
  return (
    <div className="center" style={{ padding: 24 }}>
      <CardDream style={{ maxWidth: 800, width: '100%' }}>
        <h1>Envie sua arte</h1>
        <p>Em breve: formulário de upload de imagem + contato.</p>
      </CardDream>
    </div>
  );
};

export default Envie;
