import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'esnext',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://hack-the-north-frontend-dev-vxgj.vercel.app/',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
