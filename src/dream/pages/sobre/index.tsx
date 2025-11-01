import React from 'react';
import CardDream from '../../components/CardDream';

const Sobre: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Sobre Nós</h1>
      <p style={{ marginTop: 8 }}>
        Nascido de um torneio interno de robótica, o Dream and Make evoluiu para uma
        plataforma colaborativa de arte. Aqui reunimos nossa origem e valores.
      </p>

      <CardDream style={{ marginTop: 16 }}>
        <h2>Nosso propósito</h2>
        <p style={{ color: 'var(--muted)', marginTop: 8 }}>
          Celebrar a criatividade, apoiar artistas em começo de jornada e promover uma
          comunidade acolhedora onde todos possam aprender, ensinar e se inspirar.
        </p>
      </CardDream>

      <CardDream style={{ marginTop: 12 }}>
        <h2>Valores</h2>
        <ul style={{ marginTop: 8, color: 'var(--muted)' }}>
          <li>Respeito e inclusão acima de tudo.</li>
          <li>Criação consciente: crédito, consentimento e cuidados com IA.</li>
          <li>Aprendizado aberto e colaboração genuína.</li>
          <li>Transparência nas decisões da comunidade.</li>
          <li>Foco no artista: ferramentas que empoderam, não substituem.</li>
        </ul>
      </CardDream>
    </div>
  );
};

export default Sobre;
