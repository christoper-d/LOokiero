import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://christoper-d.github.io',
  base: '/LOokiero',
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
