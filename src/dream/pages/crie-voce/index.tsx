import React from 'react';
import CardDream from '../../components/CardDream';

const CrieVoce: React.FC = () => {
  return (
    <div className="center" style={{ padding: 24 }}>
      <CardDream style={{ maxWidth: 800, width: '100%' }}>
        <h1>Crie Você</h1>
        <ul style={{ marginTop: 8 }}>
          <li><a href="https://www.bing.com/images/create" target="_blank" rel="noreferrer">Imagine I.A</a></li>
          <li><a href="https://openai.com/dall-e-3" target="_blank" rel="noreferrer">DALL·E</a></li>
          <li><a href="https://www.midjourney.com/" target="_blank" rel="noreferrer">MidJourney</a></li>
          <li><a href="https://runwayml.com/" target="_blank" rel="noreferrer">RunwayML</a></li>
        </ul>
      </CardDream>
    </div>
  );
};

export default CrieVoce;
