import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="loading-overlay" role="status" aria-live="polite" aria-label="Carregando">
            <div className="loading-box">
                <div className="spinner" aria-hidden />
                <p>Carregando…</p>
            </div>
        </div>
    );
};

export default Loading;