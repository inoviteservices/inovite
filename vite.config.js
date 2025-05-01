import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html', // Only this exists
    },
  },
  server: {
    historyApiFallback: true, // 🔥 key to make routes like /home work
  },
});
