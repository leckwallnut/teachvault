import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: "#f6f7f8",
          100: "#ebedef",
          200: "#d3d7dc",
          300: "#adb4bd",
          400: "#818c99",
          500: "#63707e",
          600: "#4e5a68",
          700: "#404a55",
          800: "#373f49",
          900: "#2c333b",
          950: "#1a1f25",
        },
        teal: {
          50: "#edfcfa",
          100: "#d2f7f2",
          200: "#a9eee6",
          300: "#72dfd5",
          400: "#3ec8be",
          500: "#24ada5",
          600: "#1a8b87",
          700: "#196f6d",
          800: "#195958",
          900: "#194a4a",
          950: "#082c2e",
        },
        slate_blue: {
          50: "#f1f5f9",
          100: "#e2e8f0",
          200: "#c8d3e1",
          300: "#a2b3cb",
          400: "#748db0",
          500: "#537098",
          600: "#455a81",
          700: "#3b4a69",
          800: "#344058",
          900: "#2e384b",
          950: "#1e2432",
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
