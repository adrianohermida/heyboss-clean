// src/styles/ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { colors, ThemeMode } from './theme';

const ThemeContext = createContext({
  mode: 'clear' as ThemeMode,
  setMode: (mode: ThemeMode) => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('clear');

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = colors[mode];
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
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
    root.style.backgroundColor = themeColors.bg;
    root.style.color = themeColors.text;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
