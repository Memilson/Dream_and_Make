import React from 'react';
import { Link } from 'react-router-dom';

const Sobre: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Sobre Nós</h1>
      <p style={{ marginTop: 8 }}>
        Nascido de um torneio interno de robótica, o Dream and Make evoluiu para uma plataforma colaborativa de arte.
        Veja também o <Link to="/changelog">Changelog</Link>.
      </p>
    </div>
  );
};

export default Sobre;
