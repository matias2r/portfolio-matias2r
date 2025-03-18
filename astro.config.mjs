import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://matias2r.github.io',
  base: '/portfolio-matias2r', 
  devToolbar: {
    enabled: false, // Deshabilita el Dev Toolbar
  },
  integrations: [tailwind()],
});