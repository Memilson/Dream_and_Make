import React from 'react';
import { Link } from 'react-router-dom';
import CardDream from '../../components/CardDream';

const Criar: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Criar</h1>
      <CardDream style={{ marginTop: 12 }}>
        <p>Participe: envie suas obras para a comunidade.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <Link className="dm-button" to="/criar/enviar" aria-label="Começar a mostrar meus sonhos">
            Começar a mostrar meus sonhos
          </Link>
        </div>
      </CardDream>
    </div>
  );
};

export default Criar;
