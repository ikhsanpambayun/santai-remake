/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      merriweather: ["Merriweather", ...defaultTheme.fontFamily.serif],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-grey": "#F2F3F8",
        "secondary-grey": "#2B2B2B",
        "tertiary-grey": "#ACACAC",
        "quarternary-grey": "#515151",
        "primary-red": "#CC1414",
      },
    },
  },
  plugins: [],
};
