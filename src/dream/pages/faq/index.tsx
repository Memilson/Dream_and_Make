import React from 'react';
import CardDream from '../../components/CardDream';
import { faq } from '../../content/faq';

const FAQ: React.FC = () => {
  return (
    <div className="page-container">
      <h1>FAQ</h1>
      <div style={{ marginTop: 12 }}>
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

export default FAQ;
