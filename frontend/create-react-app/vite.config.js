import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['bootstrap'],
  },
  esbuild: {
    target: 'esnext',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://hack-the-north-frontend-dev-iota.vercel.app',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
