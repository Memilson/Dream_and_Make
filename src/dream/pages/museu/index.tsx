import React from 'react';
import { Link } from 'react-router-dom';

const MuseuPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [msg, setMsg] = React.useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('Em breve: seu museu pessoal. Este formulário é ilustrativo.');
  };

  return (
    <div className="auth-page center" style={{ minHeight: '70vh' }}>
      <div className="auth-card card-dream" style={{ width: 'min(420px, 92vw)' }}>
        <div className="page-intro" style={{ marginBottom: 10 }}>
          <span className="eyebrow">Acesse seu espaço</span>
          <h1 className="page-title" style={{ fontSize: '1.8rem' }}>Meu museu</h1>
          <p className="tagline">Guarde obras favoritas, rascunhos e inspirações em um só lugar.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" style={{ display: 'grid', gap: 14 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span>Email</span>
            <input
              className="dm-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="voce@exemplo.com"
            />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span>Senha</span>
            <input
              className="dm-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </label>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontSize: '.95rem', color: 'var(--muted)' }}>
              <input type="checkbox" aria-label="Lembrar de mim" />
              Lembrar de mim
            </label>
            <Link className="dm-button dm-button--ghost" to="/comunidade?tab=ajuda">Esqueci a senha</Link>
          </div>
          <button className="dm-button" type="submit" style={{ width: '100%' }}>Entrar</button>
          <p className="text-muted" style={{ textAlign: 'center' }}>
            Não tem conta? <Link className="dm-button dm-button--ghost" to="/comunidade?tab=ajuda">Criar conta</Link>
          </p>
          {msg && <p className="text-muted" style={{ marginTop: 4 }}>{msg}</p>}
        </form>
      </div>
    </div>
  );
};

export default MuseuPage;
