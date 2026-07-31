// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ryoumon.github.io',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
