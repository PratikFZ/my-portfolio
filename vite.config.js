import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '//', // Replace <repository-name> with your GitHub repo name
  server: {
    allowedHosts: ['sensible-mastiff-intent.ngrok-free.app'],
  },
});
