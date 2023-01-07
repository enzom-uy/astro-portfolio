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
      keyframes: {
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        type: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
      },
      animation: {
        typing: "blink .5s step-end infinite alternate, type 1s steps(25)",
        show: "show 1s ease-in",
      },
    },
  },
  plugins: [],
};
