/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        // TODO: match colors to daisyui themes
        tasktodo: "#5a5a5a5a",
        taskcurrent: "#28456c",
        tasksuccess: "#28593f",
        taskfail: "#6e3630",
      },
    },
  },
  plugins: [require('daisyui')],
}

