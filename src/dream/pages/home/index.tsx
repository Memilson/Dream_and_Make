import React from 'react';
import CardDream from '../../components/CardDream';
import { Link } from 'react-router-dom';

const highlights = [
    {
        title: 'Experiências Imersivas',
        description: 'Explore galerias de arte, playlists sonoras e histórias que conectam artistas e comunidade.',
        action: { href: '/explorar', label: 'Explorar agora' }
    },
    {
        title: 'Compartilhe Seu Universo',
        description: 'Envie suas criações, receba feedback acolhedor e contribua para uma vitrine colaborativa.',
        action: { href: '/envie', label: 'Enviar arte' }
    },
    {
        title: 'Aprenda com a Comunidade',
        description: 'Acesse dicas criativas, guias e valores que reforçam um ambiente gentil e seguro.',
        action: { href: '/core-values', label: 'Conheça os valores' }
    }
];

const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="home-hero">
                <div className="home-hero__text">
                    <span className="eyebrow">Comunidade Criativa</span>
                    <h2>Bem-vindo(a) ao Dream and Make</h2>
                    <p>
                        Descubra, compartilhe e celebre a criatividade que pulsa em nossa comunidade. Aqui você encontra um
                        espaço acolhedor, com curadoria cuidadosa e experiências feitas para inspirar.
                    </p>
                    <div className="home-hero__actions">
                        <Link className="dm-button" to="/explorar">Começar a explorar</Link>
                        <Link className="dm-button dm-button--ghost" to="/regras">Regras da comunidade</Link>
                    </div>
                </div>

                <CardDream className="home-hero__card">
                    <h3>Curadoria que inspira</h3>
                    <p style={{ color: 'var(--muted)', marginTop: 8 }}>
                        Projetamos um ambiente fluido, responsivo e com visual minimalista para que você navegue com leveza.
                        Aproveite a nova experiência redesenhada, otimizada para qualquer dispositivo.
                    </p>
                    <ul style={{ marginTop: 16 }}>
                        <li>Layout responsivo com navegação intuitiva</li>
                        <li>Cartões com mais profundidade e leitura confortável</li>
                        <li>Transições sutis que mantêm o foco no conteúdo</li>
                    </ul>
                </CardDream>
            </section>

            <section className="home-grid">
                {highlights.map((item) => (
                    <CardDream key={item.title}>
                        <h3>{item.title}</h3>
                        <p style={{ color: 'var(--muted)' }}>{item.description}</p>
                        <div className="home-hero__actions" style={{ marginTop: 16 }}>
                            <Link className="dm-button dm-button--ghost" to={item.action.href}>{item.action.label}</Link>
                        </div>
                    </CardDream>
                ))}
            </section>

            <section className="home-cta">
                <CardDream>
                    <h2>Compartilhe seus sonhos com o mundo</h2>
                    <p>
                        Publique suas obras, inspire outras pessoas e acompanhe as novidades da plataforma. Nosso time segue
                        aprimorando a experiência para você criar com tranquilidade.
                    </p>
                    <div className="home-hero__actions" style={{ justifyContent: 'center', marginTop: 20 }}>
                        <Link className="dm-button" to="/envie">Envie sua arte</Link>
                        <Link className="dm-button dm-button--ghost" to="/ajuda">Precisa de ajuda?</Link>
                    </div>
                </CardDream>
            </section>
        </div>
    );
};

export default Home;
