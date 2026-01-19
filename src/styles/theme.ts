// src/styles/theme.ts
// Centralização de cores para clear/dark mode

export const colors = {
  clear: {
    bg: '#f8f9fa',
    brand: '#394a66', // branding azul escuro
    accent: '#0d9c6e',
    text: '#394a66', // texto principal branding
    card: '#fff',
    border: '#e5e7eb',
    footerBg: '#394a66',
  },
  dark: {
    bg: '#0a0e1a',
    brand: '#0d9c6e',
    accent: '#f59e0b',
    text: '#fff',
    card: '#181c2a',
    border: '#22242c',
    footerBg: '#181c2a',
  }
};

export type ThemeMode = 'clear' | 'dark';
