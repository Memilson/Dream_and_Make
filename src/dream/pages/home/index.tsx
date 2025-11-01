import React from 'react';
import CardDream from '../../components/CardDream';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="center" style={{ minHeight: '60vh', padding: 24 }}>
            <CardDream style={{ maxWidth: 900, width: '100%', textAlign: 'center' }}>
                <h1>Bem-Vindo(a) ao Dream and Make</h1>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>
                    Descubra, compartilhe e celebre a criatividade da comunidade.
                </p>
                <div style={{ marginTop: 16 }}>
                    <Link to="/regras"><button>Veja as Regras</button></Link>
                </div>
            </CardDream>
        </div>
    );
};

export default Home;