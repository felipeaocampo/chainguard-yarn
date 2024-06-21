import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-cg-gradient": "linear-gradient(315deg, #fde1fe, #f5f6fe 72%)",
        "hero-cg-gradient-dark": "linear-gradient(0deg, #121212, #121212 72%)",
      },
      colors: {
        bg: "rgb(var(--primary-bg) / <alpha-value>)",
        text: "rgb(var(--primary-text) / <alpha-value>)",
        "gradient-start": "rgb(var(--gradient-start) / <alpha-value>)",
        "gradient-end": "rgb(var(--gradient-end) / <alpha-value>)",
        "cg-gradient-purple": "#fde1fe",
        "cg-gradient-white": "#f5f6fe",
        "cg-text-blue": "#3443f4",
        "cg-btn-border-light-blue": "#c2c7fc",
        "cg-hover-btn-bg-blue": "#2a36c3",
        "cg-text-color-gray": "#545454",
        "cg-bg-violet": "#e1e3fd",
      },
      boxShadow: {
        card: "0 8px 16px rgba(52, 67, 244, .12)",
      },
      screens: {
        mx: "1152px",
      },
    },
  },
  plugins: [],
};
export default config;
