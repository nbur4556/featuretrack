/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark", "light", "business"]
  }
}

