const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        foreground: "#ebdbb2",
        background: "#272727",
        red: "#cc231c",
        green: "#989719",
        yellow: "#fabc2e",
        blue: "#448488",
        magenta: "#b16185",
        cyan: "#689d69",
        white: "#ebdbb2",
      },
      fontFamily: {
        sans: ["JetBrains Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
