import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';
const BlogHero: React.FC = () => {
  const { mode } = useTheme();
  return (
    <section className="text-center mb-10 animate-fade-in pt-24 py-12 transition-all duration-300" style={{ background: mode === 'clear' ? 'linear-gradient(90deg, #F1F5ED 0%, #fff 100%)' : 'linear-gradient(90deg, #173D34 0%, #00d969 100%)' }}>
      <div className="inline-flex items-center gap-2 bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 px-4 py-2 rounded-full mb-6">
        <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse" />
        <span className="text-[var(--color-success)] text-xs font-bold uppercase tracking-widest">Notícias e Artigos Jurídicos</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6" style={{ color: 'var(--color-success)' }}>Blog de Defesa do Consumidor: Guia para Eliminar Dívidas</h1>
      <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--color-brand)' }}>
        Informação jurídica de qualidade sobre a Lei 14.181/2021 e superendividamento para ajudar você a renegociar dívidas e recuperar sua paz financeira.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <span className="inline-flex items-center justify-center rounded-2xl shadow-lg border-2 border-[var(--color-success)] bg-white dark:bg-[var(--color-brand)] transition-all" style={{ width: 96, height: 96 }}>
          <img src="/assets/img/logo_lzI6JHzO.webp" alt="Logo Dr. Adriano Hermida Maia" style={{ width: 72, height: 72, objectFit: 'contain', filter: mode === 'clear' ? 'none' : 'brightness(1.2) contrast(1.1)' }} onError={(e) => { e.currentTarget.src = '/assets/img/473411138_1420160585659716_5467583944226702322_n.png'; }} />
        </span>
        <div className="flex-1 flex flex-col gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>
            Dr. Adriano Hermida Maia
          </h1>
          <h2 className="text-base md:text-lg font-semibold" style={{ color: mode === 'clear' ? 'var(--color-brand)' : 'var(--color-success)' }}>
            Blog Institucional
          </h2>
        </div>
      </div>
    </section>
  );
};
export default BlogHero;
const BlogHero: React.FC = () => (
  <section className="text-center mb-10 animate-fade-in pt-24 bg-[var(--color-cardElevated)] py-12">
    <div className="inline-flex items-center gap-2 bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 px-4 py-2 rounded-full mb-6">
      <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse" />
      <span className="text-[var(--color-success)] text-xs font-bold uppercase tracking-widest">Notícias e Artigos Jurídicos</span>
    </div>
    <h1 className="text-3xl sm:text-5xl font-extrabold mb-6" style={{ color: 'var(--color-success)' }}>Blog de Defesa do Consumidor: Guia para Eliminar Dívidas</h1>
    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--color-brand)' }}>
      Informação jurídica de qualidade sobre a Lei 14.181/2021 e superendividamento para ajudar você a renegociar dívidas e recuperar sua paz financeira.
    </p>
  </section>
);
export default BlogHero;
