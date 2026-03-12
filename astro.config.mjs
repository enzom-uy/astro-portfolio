import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), react()],
  site: "https://ojoanalogo.github.io/terminus-astro-template",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});