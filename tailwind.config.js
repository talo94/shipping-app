/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*{html,ts,tsx,js,jsx}"],
  content: ["./src/**/*.{js,ts,tsx, jsx,tsx,mdx}"],
  theme: {
    colors: {
      ...colors,
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
