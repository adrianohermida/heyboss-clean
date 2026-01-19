import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';
import { colors } from '../../styles/theme';

export default function Footer() {
  const { mode } = useTheme();
  const bgColor = mode === 'clear' ? colors.clear.footerBg : 'var(--color-brand-dark, #0a0e1a)';
  return (
    <footer
      className={`py-8 md:py-12 border-t border-white/5 w-full`}
      style={mode === 'clear' ? { backgroundColor: '#394a66' } : { backgroundColor: 'var(--color-brand-dark, #0a0e1a)' }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        <p className="text-xs md:text-sm font-medium" style={mode === 'clear' ? { color: '#fff', opacity: 0.92, letterSpacing: 0.2 } : { color: '#fff', opacity: 0.2 }}>
          © 2024 Hermida Maia Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
