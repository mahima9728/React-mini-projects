import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-mini-projects/', // Must match the repository name
  plugins: [react()],
});
