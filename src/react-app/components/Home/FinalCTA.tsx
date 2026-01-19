

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../styles/ThemeProvider';

const FinalCTA: React.FC = () => {
  const { mode, theme } = useTheme();
  // Fundo premium com gradiente institucional e sombra suave
  const bg = mode === 'clear'
    ? 'bg-[linear-gradient(135deg,var(--color-bg),var(--color-brand-primary)_60%,var(--color-brand-accent)_100%)]'
    : 'bg-[linear-gradient(135deg,var(--color-brand-dark),var(--color-brand-primary)_60%,var(--color-brand-accent)_100%)]';
  const shadow = 'shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]';
  const text = 'text-white';
  return (
    <section
      className={`py-24 ${bg} ${shadow} relative overflow-hidden flex items-center justify-center`}
      aria-label="Chamada final institucional"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-white drop-shadow-lg">
          Fale com um Advogado Especialista em Superendividamento Agora
        </h2>
        <p
          className="text-lg mb-12 max-w-2xl mx-auto font-medium"
          style={{
            color: mode === 'clear' ? 'var(--color-text)' : 'var(--color-text-secondary)',
            opacity: mode === 'clear' ? 0.92 : 0.88
          }}
        >
          Não deixe as dívidas controlarem sua vida. Nossa advocacia especializada
          em superendividamento e redução de dívidas está pronta para lutar por você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5551996032004"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-brand-primary/30 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-primary/40 focus:ring-offset-2 text-center"
            style={{ boxShadow: '0 4px 24px 0 var(--color-brand-primary)' }}
            aria-label="Falar no WhatsApp"
          >
            Falar no WhatsApp
          </a>
          <Link
            to="/appointments"
            className="bg-white text-brand-primary px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-brand-primary/20 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-primary/30 focus:ring-offset-2 text-center"
            aria-label="Agendar avaliação"
          >
            Agendar avaliação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
