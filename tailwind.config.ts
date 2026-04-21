import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#e9e5dc",
        brown: "#644e43",
        peach: "#e9d3c6",
        dark: "#1a0d08",
        "warm-white": "#faf8f5",
        gold: "#8B6B55",
        "light-brown": "#8a6d62",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        wider: "0.1em",
      },
    },
  },
  plugins: [],
};

export default config;
