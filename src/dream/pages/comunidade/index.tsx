import React from 'react';
import CardDream from '../../components/CardDream';
import { faq } from '../../content/faq';
import { useSyncedTab } from '../../shared/hooks/useSyncedTab';
import { Tabs } from '../../shared/components/Tabs';
import { HelpCircle, ShieldCheck, Mail } from 'lucide-react';

type Tab = 'ajuda' | 'regras' | 'suporte';

const Comunidade: React.FC = () => {
  const { tab, setTab } = useSyncedTab<Tab>({ values: ['ajuda', 'regras', 'suporte'], defaultValue: 'ajuda', basePath: '/comunidade' });

  return (
    <div className="page-container">
      <CardDream className="max-w-900">
        <h1>Comunidade</h1>
        <p className="text-muted mt-8">Encontre ajuda e conheça as regras da comunidade.</p>
        <Tabs<Tab>
          aria-label="Seções da comunidade"
          items={[
            { id: 'ajuda', label: 'Ajuda', icon: HelpCircle },
            { id: 'regras', label: 'Regras', icon: ShieldCheck },
            { id: 'suporte', label: 'Suporte', icon: Mail },
          ]}
          active={tab}
          onChange={setTab}
        />
      </CardDream>

      {tab === 'ajuda' && <FaqSection />}
      {tab === 'suporte' && <SupportSection />}

      {tab === 'regras' && (
        <div className="mt-16">
          <CardDream>
            <h2>Regras de Convivência</h2>
            <ul className="list mt-8">
              <li className="flex-row gap-12"><ShieldCheck className="li-icon" aria-hidden /><span>Respeite todas as pessoas e suas criações.</span></li>
              <li className="flex-row gap-12"><ShieldCheck className="li-icon" aria-hidden /><span>Sem spam ou conteúdo ofensivo.</span></li>
              <li className="flex-row gap-12"><ShieldCheck className="li-icon" aria-hidden /><span>Críticas construtivas são bem-vindas.</span></li>
            </ul>
          </CardDream>
        </div>
      )}
    </div>
  );
};

export default Comunidade;

const SupportSection: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const canSend = email.trim().length > 3 && message.trim().length > 3;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;
    const to = 'angelolealpl14@gmail.com';
    const subject = encodeURIComponent('Suporte - Dream and Make');
    const body = encodeURIComponent([
      `Nome: ${name || '-'}`,
      `E-mail: ${email || '-'}`,
      '',
      message || '-',
    ].join('\n'));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mt-16">
      <CardDream className="max-w-900">
        <h2>Precisa de suporte?</h2>
        <form className="form-grid mt-12" onSubmit={onSubmit}>
          <div>
            <label htmlFor="suporte-nome">Nome</label>
            <input id="suporte-nome" className="dm-input mt-8" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="suporte-email">E-mail</label>
            <input id="suporte-email" type="email" className="dm-input mt-8" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" required />
          </div>
          <div className="full">
            <label htmlFor="suporte-msg">Mensagem</label>
            <textarea id="suporte-msg" className="dm-textarea mt-8" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Como podemos ajudar?" required />
          </div>
          <div className="form-actions">
            <button type="submit" className="dm-button" disabled={!canSend}>Enviar e-mail</button>
          </div>
        </form>
      </CardDream>
    </div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="faq-list">
        {faq.map((item, idx) => (
          <CardDream key={idx}>
            <div className="faq-q"><HelpCircle className="tab-icon" aria-hidden /><span>{item.q}</span></div>
            <p className="faq-a">{item.a}</p>
          </CardDream>
        ))}
      </div>
    </div>
  );
};
