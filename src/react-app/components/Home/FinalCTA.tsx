

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../styles/ThemeProvider';

const FinalCTA: React.FC = () => {
  const { mode } = useTheme();
  // Fundo premium 100% tokenizado
  const bg = 'bg-[var(--color-success)]';
  const shadow = 'shadow-[0_8px_32px_0_var(--color-shadow-success)]';
  return (
    <section
      className={`py-24 ${bg} ${shadow} relative overflow-hidden flex items-center justify-center`}
      aria-label="Chamada final institucional"
    >
      {/* Removido overlay de degradê */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
          Fale com um Advogado Especialista em Superendividamento Agora
        </h2>
        <p
          className="text-lg mb-12 max-w-2xl mx-auto font-medium text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
        >
          Não deixe as dívidas controlarem sua vida. Nossa advocacia especializada
          em superendividamento e redução de dívidas está pronta para lutar por você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5551996032004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 text-center bg-white text-[#0a0e1a] border border-white/10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)]"
            aria-label="Falar no WhatsApp"
          >
            Falar no WhatsApp
          </a>
          <Link
            to="/appointments"
            className="px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 text-center bg-[var(--color-cardElevated)] text-white border border-white/10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)]"
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
