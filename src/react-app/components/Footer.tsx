import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';
import { colors } from '../../styles/theme';

export default function Footer() {
  const { mode } = useTheme();
  const bgColor = mode === 'clear' ? colors.clear.footerBg : 'bg-brand-dark';
  return (
    <footer
      className={`py-12 border-t border-white/5 ${mode === 'clear' ? '' : 'bg-brand-dark'}`}
      style={mode === 'clear' ? { backgroundColor: colors.clear.footerBg } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white/20 text-xs">
          © 2024 Hermida Maia Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
