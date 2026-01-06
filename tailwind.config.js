// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // We use manual class via data-theme, but Tailwind needs this for dark: variants
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica Neue", "Segoe UI", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Source Code Pro", "Monaco", "monospace"],
      },
      colors: {
        // Map your CSS variables correctly
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};