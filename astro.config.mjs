import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), react()],
  site: "https://enzomun.dev",
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});