import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This configuration tells Vite how to build our project
// The base path is important for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/bio-link/' // This should match your repository name
})