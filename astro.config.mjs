import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hp8crn9vmd-code.github.io',
  base: '/logicdrivex/',
  integrations: [tailwind()],
  vite: {
    // No warnings in build logs
    logLevel: 'error',
  },
});
