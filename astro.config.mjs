import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), tailwind(), prefetch(), sitemap()]
});