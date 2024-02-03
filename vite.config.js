import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': new URL('src', import.meta.url).pathname,
      '@assets': new URL('src/assets', import.meta.url).pathname
    }
  }
});
