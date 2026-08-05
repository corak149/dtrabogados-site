import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dtrabogados.com',
  output: 'static',
  // Cloudflare Pages usa Node 18+; sin adapter por ahora (sitio estático puro)
});
