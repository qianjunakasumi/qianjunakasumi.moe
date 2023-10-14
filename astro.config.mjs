import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://qianjunakasumi.moe',
  build: {
    assets: 'assets'
  },
  integrations: [lit(), tailwind(), prefetch(), sitemap(), mdx()]
});