/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js /app folder
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
    "./pages/**/*.{js,ts,jsx,tsx}", // Optional: /pages if used
    "./node_modules/daisyui/dist/**/*.js", // DaisyUI components
  ],
  theme: {
    extend: {
      colors: {
        pink: "#DD64B8",
        blue: "#2A9CBD",
        green: "#6A9E42",
        gray: "#595F6F",
      },
      fontFamily: {
        handwriting: ['"Gloria Hallelujah"', "cursive"],
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "corporate"],
  },
};
