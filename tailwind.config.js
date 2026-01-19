

/** @type {import('tailwindcss').Config} */
import tailwindcssMotion from 'tailwindcss-motion';

export default {
  content: ['./src/react-app/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: 'var(--color-bg)',
          primary: 'var(--color-brand)',
          accent: 'var(--color-accent)',
          elevated: 'var(--color-cardElevated)',
          secondary: 'var(--color-bg)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          elevated: 'var(--color-cardElevated)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        },
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
        white: 'var(--color-white)',
        footer: 'var(--color-footerBg)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [tailwindcssMotion],
};

