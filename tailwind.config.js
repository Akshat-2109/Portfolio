/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef4ff",
          100: "#dbe6fe",
          200: "#bfd2fe",
          300: "#93b4fd",
          400: "#608bfa",
          500: "#3b66f5",
          600: "#2547ea",
          700: "#1d36d6",
          800: "#1e2fad",
          900: "#1e2c88",
        },
        accent: "#22d3ee",
        surface: {
          DEFAULT: "#ffffff",
          dark: "#0b0f19",
        },
        surfaceAlt: {
          DEFAULT: "#f5f7fb",
          dark: "#121826",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Sora'", "'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59, 102, 245, 0.45)",
        card: "0 10px 30px -12px rgba(15, 23, 42, 0.15)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
