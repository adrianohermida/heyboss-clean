import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';
import { colors } from '../../styles/theme';

export default function Footer() {
  const { mode } = useTheme();
  const bg = mode === 'clear' ? 'bg-[var(--color-cardElevated)]' : 'bg-[var(--color-brand)]';
  const text = mode === 'clear' ? 'text-[var(--color-text)]' : 'text-[var(--color-white)]';
  const link = 'hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)] transition-colors';
  return (
    <footer
      className={`w-full pt-12 pb-8 border-t-0 shadow-[0_-2px_32px_0_#394a6620] ${bg}`}
      aria-label="Rodapé institucional"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-8 text-center md:text-left">
        {/* Navegação institucional */}
        <div className="flex-1 flex flex-col gap-4 mb-6 md:mb-0">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="/" className={`text-sm font-semibold ${text} ${link}`}>Início</a>
            <a href="/about2" className={`text-sm font-semibold ${text} ${link}`}>Sobre</a>
            <a href="/blog" className={`text-sm font-semibold ${text} ${link}`}>Blog</a>
            <a href="/contato" className={`text-sm font-semibold ${text} ${link}`}>Contato</a>
            <a href="/politica-privacidade" className={`text-sm font-semibold ${text} ${link}`}>Política de Privacidade</a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
            {/* Social icons placeholders */}
            <a href="#" aria-label="Instagram" className={`${link} ${text} opacity-70`}><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="6" y="6" width="8" height="8" rx="2" /></svg></a>
            <a href="#" aria-label="LinkedIn" className={`${link} ${text} opacity-70`}><svg width="20" height="20" fill="currentColor"><rect x="3" y="7" width="3" height="10" rx="1" /><rect x="8" y="10" width="3" height="7" rx="1" /><rect x="13" y="8" width="3" height="9" rx="1" /></svg></a>
            <a href="#" aria-label="WhatsApp" className={`${link} ${text} opacity-70`}><svg width="20" height="20" fill="currentColor"><circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M7 9c1 2 3 3 5 2" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg></a>
          </div>
        </div>
        {/* Aviso legal */}
        <div className="flex-1 flex flex-col gap-2 items-center md:items-end">
          <p className={`text-xs md:text-sm font-medium ${text} opacity-95`}>
            Hermida Maia Advocacia é um escritório de advocacia especializado em superendividamento e defesa do consumidor. Nenhuma informação deste site constitui aconselhamento jurídico.
          </p>
          <p className={`text-xs md:text-sm font-medium ${text} opacity-90`}>
            O uso deste site implica aceitação dos <a href="/politica-privacidade" className={`underline ${link}`}>termos de uso</a>.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className={`text-xs md:text-sm font-semibold tracking-wide ${text} opacity-100`}>
          © 2024 Hermida Maia Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
