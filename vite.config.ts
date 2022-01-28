import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteEjsPlugin } from 'vite-plugin-ejs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteEjsPlugin({
      HTML_TITLE: 'React + TypeScript + Vite',
    }),
    react(),
  ],
})
