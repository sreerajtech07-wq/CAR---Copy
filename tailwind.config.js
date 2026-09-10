/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#F8FAFC',
          900: '#FFFFFF',
          850: '#F1F5F9',
          800: '#E2E8F0',
          750: '#CBD5E1',
          700: '#94A3B8',
          600: '#64748B',
        },
        metallic: {
          100: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        },
        brand: {
          red: '#1D4ED8',
          crimson: '#1E40AF',
          gold: '#F59E0B',
          goldBright: '#D97706',
          cyan: '#1D4ED8',
          amber: '#F59E0B',
          blue: '#1D4ED8',
        }
      },
      fontFamily: {
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        cinematic: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'super-wide': '0.35em',
        'ultra-wide': '0.5em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}


