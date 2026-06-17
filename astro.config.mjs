import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://etcetera-notesfromthemiddleofthinking.netlify.app/',
  integrations: [solid(), sitemap()],
  markdown: {
    syntaxHighlight: 'prism'
  }
});