import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bio-link/',
  // This helps Vite find our entry points
  build: {
    outDir: 'dist',
  }
})