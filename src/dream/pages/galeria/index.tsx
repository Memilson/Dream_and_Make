import React from 'react';
import CardDream from '../../components/CardDream';

const Galeria: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Galeria</h1>
      <CardDream style={{ marginTop: 12 }}>
        <p>Em breve: carrosséis por artista e modal de imagens.</p>
      </CardDream>
    </div>
  );
};

export default Galeria;
