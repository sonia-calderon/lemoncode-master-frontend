/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6b8e67",
        secondary: "#57634f",
        terciary: "#386566",
        background: "#f7faf5",
        textlight: "#f1f4f0",
        border: "#e1e4df",
        error: "#ba1a1a",
        text: "#191d18"
      }
    },
  },
  plugins: [],
}

