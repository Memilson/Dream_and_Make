import React from 'react';

const Ajuda: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Ajuda</h1>
      <p style={{ marginTop: 8 }}>
        Precisa de suporte? Escreva para
        {' '}<a href="mailto:angelolealpl14@gmail.com">angelolealpl14@gmail.com</a>.
      </p>
    </div>
  );
};

export default Ajuda;
