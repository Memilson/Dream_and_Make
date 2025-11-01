import React from 'react';
import CardDream from '../../components/CardDream';
import { Link } from 'react-router-dom';

const Regras: React.FC = () => {
  return (
    <div className="center" style={{ padding: 24 }}>
      <CardDream style={{ maxWidth: 700, width: '100%' }}>
        <h1>Regras de Convivência</h1>
        <ul style={{ marginTop: 8 }}>
          <li>Respeite todas as pessoas e suas criações.</li>
          <li>Sem spam ou conteúdo ofensivo.</li>
          <li>Críticas construtivas são bem-vindas.</li>
        </ul>
        <div style={{ marginTop: 16 }}>
          <Link to="/explorar"><button>Explorar</button></Link>
        </div>
      </CardDream>
    </div>
  );
};

export default Regras;
