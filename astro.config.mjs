import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [solid()],
  markdown: {
    syntaxHighlight: 'prism',
  },
});