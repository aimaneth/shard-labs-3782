import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: "rgb(var(--oui-color-primary) / <alpha-value>)",
        "primary-light": "rgb(var(--oui-color-primary-light) / <alpha-value>)",
        "base-9": "rgb(var(--oui-color-base-9) / <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;
