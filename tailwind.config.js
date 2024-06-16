/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter", "night",],
  },
  plugins: [
    require('daisyui'),
  ],
}

