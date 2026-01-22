// Manifesto: ContactHero
// - Exibe título e subtítulo da página de contato
// - Mobile-first, acessível, tokenização CSS
import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';
const ContactHero: React.FC = () => {
  const { mode } = useTheme();
  return (
    <section className="text-center mb-16 animate-fade-in py-12 transition-all duration-300" style={{ background: mode === 'clear' ? 'linear-gradient(90deg, #F1F5ED 0%, #fff 100%)' : 'linear-gradient(90deg, #173D34 0%, #00d969 100%)' }}>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6" style={{ color: 'var(--color-success)' }}>
        Fale com um Advogado Especialista em Dívidas
      </h1>
      <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--color-brand)' }}>
        Estamos prontos para ajudar você a recuperar sua paz financeira através da Lei do Superendividamento. Escolha o canal de sua preferência.
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
            Fale Conosco
          </h2>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
export default ContactHero;
const ContactHero: React.FC = () => (
  <section className="text-center mb-16 animate-fade-in bg-[var(--color-cardElevated)] py-12">
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6" style={{ color: 'var(--color-success)' }}>
      Fale com um Advogado Especialista em Dívidas
    </h1>
    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--color-brand)' }}>
      Estamos prontos para ajudar você a recuperar sua paz financeira através da Lei do Superendividamento. Escolha o canal de sua preferência.
    </p>
  </section>
);
export default ContactHero;
