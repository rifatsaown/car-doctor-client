/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Chose the theme you want to enable.
  // Remove the line if you want to use the default theme
  // full docs here: https://daisyui.com/docs/themes/
  daisyui: {
    themes: ["emerald"],
  },
}

