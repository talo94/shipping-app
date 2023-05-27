/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*{html,ts,tsx,js,jsx}"],
  content: ["./src/**/*.{js,ts,tsx, jsx,tsx,mdx}"],
  theme: {
    colors: { ...colors },
  },
  plugins: [require("@tailwindcss/forms")],
};
