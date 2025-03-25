/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002B5B",
        secondary: "#01306E",
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans: ["Helvetica", "Arial", "sans-serif"],
        bonvivant: ["BonVivant", ...defaultTheme.fontFamily.sans],
        bonvivantSerif: ["BonVivantSerif", ...defaultTheme.fontFamily.sans],
        bonvivantSerifBold: [
          "BonVivantSerifBold",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      gridTemplateColumns: {
        banner: "1fr 0.7fr",
        services: "1fr 1.4fr",
        services2: "1fr 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
