import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://qianjunakasumi.moe',

  build: {
    assets: 'assets'
  },

  integrations: [lit(), sitemap(), mdx()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh'],
    fallback: {
      ja: 'en',
      zh: 'en',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});