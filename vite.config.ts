import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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


