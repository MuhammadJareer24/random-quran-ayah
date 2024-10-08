/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#f9fafb",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
}
