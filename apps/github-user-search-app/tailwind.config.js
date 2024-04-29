/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: "var(--space-mono)",
      },
      colors: {
        light: {
          blue1: "#0079FF",
          blue2: "#4B6A9B",
          blue3: "#60ABFF",
          grey1: "#697C9A",
          grey2: "#F6F8FF",
          black: "#2B3442",
          black2: "#222731",
          white: "#FEFEFE",
          red: "#F74646",
        },
        dark: {
          blue: "#0079FF",
          blue2: "#90A4D4",
          blue3: "#60ABFF",
          white: "#FFFFFF",
          black1: "#141D2F",
          black2: "#1E2A47",
          red: "#F74646",
        },
      },
    },
  },
  plugins: [],
};
