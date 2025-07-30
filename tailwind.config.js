const { heroui } = require("@heroui/theme");
const flowbitePlugin = require("flowbite/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // HeroUI-specific files
    "./node_modules/@heroui/theme/dist/components/(input|form).js",

    // Flowbite components
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Raw brand colors
        pink: "var(--color-pink)",
        blue: "var(--color-blue)",
        green: "var(--color-green)",
        white: "var(--color-white)",
        gray: "var(--color-gray)",
        black: "var(--color-black)",

        // Semantic colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },

      fontFamily: {
        handwriting: ['"Gloria Hallelujah"', "cursive"],
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [heroui(), flowbitePlugin],
};
