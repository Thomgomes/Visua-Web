/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Visua-Bg": "#1A222A",
        "Visua-Text": "#ECEFF4",
        "Visua-Blue": "#1C7396",
        "Visua-Blue-houver": "#185a6e",
        "Visua-Grey": "#23384D",
        "Visua-Grey-Border": "#6F7B90",
        "Visua-Login/Nav": "rgba(52, 142, 180, 0.25)",
        "Visua-Placeholder/icon": "#B2C7DD",
        "Visua-Input": "#202A32",
        "Visua-Transparence": "rgba(23, 27, 32, 0.5)",
        // Cores usadas no figma do visua de desktop
      },
      screens: {
        "max-w-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-w-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-w-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-w-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-w-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        tiresias: ["Tiresias Infofont", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
