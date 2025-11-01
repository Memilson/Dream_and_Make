import React from 'react';
import CardDream from '../../components/CardDream';
import { faq } from '../../content/faq';

const Ajuda: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Ajuda</h1>
      <CardDream style={{ marginTop: 12 }}>
        <p>
          Precisa de suporte? Escreva para
          {' '}<a href="mailto:angelolealpl14@gmail.com">angelolealpl14@gmail.com</a>.
        </p>
      </CardDream>

      <div style={{ marginTop: 16 }}>
        {faq.map((item, idx) => (
          <CardDream key={idx} style={{ marginBottom: 12 }}>
            <strong>{item.q}</strong>
            <p style={{ color: 'var(--muted)', marginTop: 6 }}>{item.a}</p>
          </CardDream>
        ))}
      </div>
    </div>
  );
};

export default Ajuda;
