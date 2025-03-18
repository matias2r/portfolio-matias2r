import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  devToolbar: {
    enabled: false, // Deshabilita el Dev Toolbar
  },
  integrations: [tailwind()],
});