import React from 'react';
import CardDream from '../../components/CardDream';
import { HeartHandshake, ShieldCheck, Sparkles, Users, Lightbulb } from 'lucide-react';

const Sobre: React.FC = () => {
  return (
    <div className="page-container">
      <CardDream className="max-w-900">
        <h1>Sobre Nós</h1>
        <p className="mt-8 text-muted">
          Nascido de um torneio interno de robótica, o Dream and Make evoluiu para uma plataforma colaborativa de arte.
          Aqui reunimos nossa origem e valores.
        </p>
        <div className="badges mt-12">
          <span className="badge">Origem</span>
          <span className="badge">Comunidade</span>
          <span className="badge">Criatividade</span>
        </div>
      </CardDream>

      <div className="grid-auto-fit">
        <CardDream>
          <h2>Nosso propósito</h2>
          <p className="mt-8 text-muted">
            Celebrar a criatividade, apoiar artistas em começo de jornada e promover uma comunidade acolhedora
            onde todos possam aprender, ensinar e se inspirar.
          </p>
        </CardDream>

        <CardDream>
          <h2>Valores</h2>
          <ul className="list list--values mt-8">
            <li>
              <ShieldCheck className="li-icon" aria-hidden />
              <span>Respeito e inclusão acima de tudo.</span>
            </li>
            <li>
              <HeartHandshake className="li-icon" aria-hidden />
              <span>Criação consciente: crédito, consentimento e cuidados com IA.</span>
            </li>
            <li>
              <Lightbulb className="li-icon" aria-hidden />
              <span>Aprendizado aberto e colaboração genuína.</span>
            </li>
            <li>
              <Users className="li-icon" aria-hidden />
              <span>Transparência nas decisões da comunidade.</span>
            </li>
            <li>
              <Sparkles className="li-icon" aria-hidden />
              <span>Foco no artista: ferramentas que empoderam, não substituem.</span>
            </li>
          </ul>
        </CardDream>
      </div>
    </div>
  );
};

export default Sobre;
