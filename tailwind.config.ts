import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#9128FA",
        glass: "#0D0D0D99",
        black: "#000",
        white: "#fff",
        gray: "#A2A2A2",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(270deg, #9855FF 0%, #E336FF 100%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "0",
        },
        screens: {
          sm: "100%",
          md: "728px",
          lg: "1340px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
