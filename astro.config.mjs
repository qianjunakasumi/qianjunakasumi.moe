import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://qianjunakasumi.moe',
  build: {
    assets: 'assets'
  },
  integrations: [lit(), tailwind(), sitemap(), mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh'],
    fallback: {
      ja: 'en',
      zh: 'en',
    },
  },
});