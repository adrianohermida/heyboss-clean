// src/styles/ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { colors, ThemeMode } from './theme';

const ThemeContext = createContext({
  mode: 'clear' as ThemeMode,
  setMode: (mode: ThemeMode) => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Dark como padrão, clear como alternativo
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Preferência do usuário no localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme-mode');
      if (stored === 'clear' || stored === 'dark') return stored as ThemeMode;
    }
    return 'dark';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', mode);
    }
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    const html = document.querySelector('html');
    const themeColors = colors[mode];
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    // Compatibilidade com variáveis antigas
    root.style.setProperty('--bg-primary', themeColors.bg);
    root.style.setProperty('--brand-primary', themeColors.brand);
    root.style.setProperty('--brand-accent', themeColors.accent);
    root.style.setProperty('--text-white', themeColors.text);
    // Adiciona tokens de status como variáveis globais
    root.style.setProperty('--color-success', themeColors.success);
    root.style.setProperty('--color-error', themeColors.error);
    root.style.setProperty('--color-warning', themeColors.warning);
    root.style.setProperty('--color-info', themeColors.info);
    root.classList.remove('theme-clear', 'theme-dark');
    root.classList.add(`theme-${mode}`);

    // Aplica fundo e cor de texto globalmente (body e html)
    document.body.style.backgroundColor = themeColors.bg;
    document.body.style.color = themeColors.text;
    if (html) {
      html.style.backgroundColor = themeColors.bg;
      html.style.color = themeColors.text;
      html.style.transition = 'background 0.4s, color 0.4s';
    }
    root.style.backgroundColor = themeColors.bg;
    root.style.color = themeColors.text;
    root.style.transition = 'background 0.4s, color 0.4s';
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
