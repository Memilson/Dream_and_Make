import React from 'react';
import CardDream from '../../components/CardDream';
import { Link } from 'react-router-dom';
import Carousel from '../../shared/components/Carousel';

const highlights = [
    {
        title: 'Experiências imersivas',
        description: 'Passe por galerias, playlists e histórias. De artista para artista, sem pressa.',
        action: { href: '/explorar', label: 'Explorar agora' }
    },
    {
        title: 'Compartilhe seu universo',
        description: 'Envie suas criações, receba feedback gentil e faça parte de uma vitrine colaborativa.',
        action: { href: '/criar?tab=enviar', label: 'Enviar arte' }
    },
    {
        title: 'Aprenda com a comunidade',
        description: 'Encontre dicas, guias e valores que mantêm este espaço seguro e acolhedor.',
        action: { href: '/sobre', label: 'Conheça nossos valores' }
    }
];

const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="home-hero">
                <div className="home-hero__text">
                    <span className="eyebrow">Arte que pulsa, vozes em destaque</span>
                    <h1 className="page-title">Dream and Make</h1>
                    <p className="tagline">
                        Um espaço para descobrir talentos, apoiar artistas e compartilhar o que te move.
                    </p>
                    <div className="home-hero__actions">
                        <Link className="dm-button" to="/explorar">Começar a explorar</Link>
                        <Link className="dm-button dm-button--ghost" to="/comunidade?tab=regras">Regras da casa</Link>
                    </div>
                </div>

                {/* Novo carrossel de destaques */}
                <div className="home-hero__card">
                    <Carousel />
                </div>
            </section>

            <section className="home-grid">
                {highlights.map((item) => (
                    <CardDream key={item.title}>
                        <h3>{item.title}</h3>
                        <p className="text-muted">{item.description}</p>
                        <div className="home-hero__actions mt-16">
                            <Link className="dm-button dm-button--ghost" to={item.action.href}>{item.action.label}</Link>
                        </div>
                    </CardDream>
                ))}
            </section>

            <section className="home-cta">
                <CardDream>
                    <h2>Mostre seus sonhos ao mundo</h2>
                    <p>
                        Publique suas obras, inspire outras pessoas e acompanhe as novidades da plataforma. A gente segue
                        lapidando a experiência para você criar com tranquilidade.
                    </p>
                    <div className="home-hero__actions mt-20 justify-center">
                        <Link className="dm-button" to="/criar?tab=enviar">Envie sua arte</Link>
                        <Link className="dm-button dm-button--ghost" to="/comunidade?tab=ajuda">Precisa de ajuda?</Link>
                    </div>
                </CardDream>
            </section>
        </div>
    );
};

export default Home;
