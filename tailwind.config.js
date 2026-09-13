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
          950: '#050505',
          900: '#0D0D10',
          850: '#15151A',
          800: '#1C1C22',
          750: '#2A2A31',
          700: '#52525B',
          600: '#71717A',
        },
        metallic: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
        },
        brand: {
          red: '#B5121B',
          crimson: '#7A0C14',
          gold: '#B5121B',
          goldBright: '#D71920',
          cyan: '#B5121B',
          amber: '#D71920',
          blue: '#B5121B',
        }
      },
      fontFamily: {
        display: ['"Outfit"', '"Syne"', '"Space Grotesk"', 'sans-serif'],
        cinematic: ['"Outfit"', '"Syne"', 'sans-serif'],
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


