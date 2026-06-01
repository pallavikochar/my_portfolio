import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/',
  server: {
    proxy: {
      '/api': 'http://localhost:3002',
    },
  },
})
