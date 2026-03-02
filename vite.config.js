import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows the dev server to be accessible from outside the container
    port: 5173,
    strictPort: true,
  },
})
