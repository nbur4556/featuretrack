/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        // TODO: match colors to daisyui themes
        statustodo: "#5a5a5a5a",
        statuscurrent: "#28456c",
        statusfail: "#6e3630",
        statussuccess: "#28593f",
        priorityhigh: "#6e3630",
        prioritymid: "#854c1d",
        prioritylow: "#28456c",
        typebug: "#6e3630",
        typeimprovement: "#854c1d",
        typefeature: "#28456c",
        appassigned: "#28593f",
        appsuggestion: "#854c1d",
        appunassigned: "#28456c",
        appdeclined: "#6e3630",
      },
    },
  },
  plugins: [require('daisyui')],
}

