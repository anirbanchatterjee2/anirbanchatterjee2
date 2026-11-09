// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site URL is controlled centrally in src/data/profile.ts via SITE_URL env.
// During Netlify preview builds, Astro uses Netlify's URL env automatically.
const site = process.env.PUBLIC_SITE_URL ?? 'https://anirbanchatterjee.netlify.app';

// https://astro.new/config
export default defineConfig({
  site,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
      i18n: { defaultLocale: 'en', locales: { en: 'en' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
