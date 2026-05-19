// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
