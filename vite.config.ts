import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: false,
        quality: 80,
      },
      logStats: true, // ബിൽഡ് ചെയ്യുമ്പോൾ എത്ര സൈസ് കുറഞ്ഞു എന്ന് ടെർമിനലിൽ കാണിക്കും
    }),
  ],
  server: {
    host: true,
    allowedHosts: true,
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        detailing: resolve(import.meta.dirname, 'car-detailing.html'),
        ceramic: resolve(import.meta.dirname, 'ceramic-coating.html'),
        'graphene-coating': resolve(import.meta.dirname, 'graphene-coating.html'),
        'borophene-coating': resolve(import.meta.dirname, 'borophene-coating.html'),
        ppf: resolve(import.meta.dirname, 'ppf.html'),
        'sun-film': resolve(import.meta.dirname, 'sun-film.html'),
        'anti-rust': resolve(import.meta.dirname, 'anti-rust.html'),
        'additional-services': resolve(import.meta.dirname, 'additional-services.html'),
      },
    },
  },
})