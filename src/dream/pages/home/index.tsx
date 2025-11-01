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
    const [heroIndex, setHeroIndex] = React.useState(0);

    const heroPhrases = [
        { line1: 'Encontre sua próxima', line2: 'ideia para criar hoje' },
        { line1: 'Descubra artistas e', line2: 'guarde suas inspirações' },
        { line1: 'Compartilhe seu', line2: 'processo e bastidores' },
        { line1: 'Apoie quem te inspira com', line2: 'gestos simples e gentis' },
    ];

    return (
        <div className="home">
            <section className="home-hero">
                <div className="home-hero__text hero-lead text-shield">
                    <span className="eyebrow">Arte que pulsa, vozes em destaque</span>
                    <h1 className="page-title hero-title">Dream and Make</h1>
                    <p className="tagline hero-tagline">
                        Um espaço para descobrir talentos, apoiar artistas e compartilhar o que te move.
                    </p>
                    <div className="hero-phrases" aria-live="polite">
                        <h2 className="hero-phrase">
                            {heroPhrases[heroIndex].line1}
                            <br />
                            <span className="hero-accent">{heroPhrases[heroIndex].line2}</span>
                        </h2>
                    </div>
                    <div className="home-hero__actions">
                        <Link className="dm-button" to="/explorar">Começar a explorar</Link>
                        <Link className="dm-button dm-button--ghost" to="/comunidade?tab=regras">Regras da casa</Link>
                    </div>
                </div>

                {/* Novo carrossel de destaques */}
                <div className="home-hero__card">
                    <Carousel count={4} autoMs={6000} onIndexChange={setHeroIndex} />
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
