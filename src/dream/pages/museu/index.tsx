import React from 'react';
import { Link } from 'react-router-dom';

const MuseuPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [msg, setMsg] = React.useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder de login – integrar com auth quando estiver pronto
    setMsg('Em breve: seu museu pessoal. Por enquanto, este login é ilustrativo.');
  };

  return (
    <div className="page-container">
      <div className="card-dream">
        <div className="page-intro" style={{ marginBottom: 12 }}>
          <span className="eyebrow">Acesse seu espaço</span>
          <h1 className="page-title">Meu museu</h1>
          <p className="tagline">Guarde obras favoritas, rascunhos e inspirações em um só lugar.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid-auto-fit" style={{ gap: 16 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="voce@exemplo.com"
              style={{ padding: '12px 14px', borderRadius: 12, border: '1px solid var(--outline)', background: 'var(--surface-strong)', color: 'var(--text)' }}
            />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span>Senha</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{ padding: '12px 14px', borderRadius: 12, border: '1px solid var(--outline)', background: 'var(--surface-strong)', color: 'var(--text)' }}
            />
          </label>
          <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
            <button className="dm-button" type="submit">Entrar</button>
            <Link className="dm-button dm-button--ghost" to="/comunidade?tab=ajuda">Criar conta</Link>
          </div>
          {msg && <p className="text-muted" style={{ marginTop: 8 }}>{msg}</p>}
        </form>
      </div>
    </div>
  );
};

export default MuseuPage;
