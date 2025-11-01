import React from 'react';
import { Link } from 'react-router-dom';
import CardDream from '../../components/CardDream';

const Comunidade: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Comunidade</h1>
      <CardDream style={{ marginTop: 12 }}>
            <p>Encontre ajuda e conheça as regras da comunidade.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <Link className="dm-button" to="/comunidade/ajuda">Ajuda</Link>
          <Link className="dm-button dm-button--ghost" to="/comunidade/regras">Regras</Link>
        </div>
      </CardDream>
    </div>
  );
};

export default Comunidade;
