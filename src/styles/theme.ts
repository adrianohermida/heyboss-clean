// src/styles/theme.ts
// Centralização de cores para clear/dark mode

export const colors = {
  clear: {
    bg: '#f7f9fa', // fundo geral
    brand: '#394a66', // cor matriz branding
    accent: '#00d969', // destaque vibrante
    text: '#394a66', // texto principal
    card: '#f7f9fa', // cards e superfícies
    cardElevated: '#edf0f2', // cards elevados ou destaque
    border: '#e5e7eb',
    footerBg: '#394a66',
    white: '#edf0f2', // substituto do branco
    success: '#00d969', // verde sucesso
    error: '#e53935', // vermelho erro
    warning: '#ffb300', // amarelo alerta
    info: '#1976d2', // azul info
  },
  dark: {
    bg: '#181c2a', // fundo escuro elegante
    brand: '#394a66', // mantém matriz para consistência
    accent: '#00d969', // destaque vibrante
    text: '#edf0f2', // texto claro
    card: '#22242c', // cards escuros
    cardElevated: '#394a66', // cards elevados escuros
    border: '#22242c',
    footerBg: '#181c2a',
    white: '#edf0f2', // mantém consistência para elementos claros
    success: '#00d969', // verde sucesso
    error: '#ff6659', // vermelho erro escuro
    warning: '#ffd54f', // amarelo alerta escuro
    info: '#90caf9', // azul info escuro
  }
};

export type ThemeMode = 'clear' | 'dark';
