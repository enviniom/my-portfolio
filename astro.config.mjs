import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://enviniom.github.io',
  base: '/my-portfolio',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
   }
  }
});
