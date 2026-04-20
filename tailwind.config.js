/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#7c3aed",
        secondary: "#3b82f6",
        accent: "#ec4899",
      },
      keyframes: {
        "border-shape": {
          "0%":   { borderRadius: "51% 49% 48% 52% / 49% 49% 51% 51%" },
          "35%":  { borderRadius: "60% 48% 57% 43% / 40% 54% 46% 60%" },
          "65%":  { borderRadius: "67% 33% 68% 32% / 27% 70% 30% 73%" },
          "100%": { borderRadius: "51% 49% 48% 52% / 49% 49% 51% 51%" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-18px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,58,237,0.3)" },
          "50%":      { boxShadow: "0 0 50px rgba(124,58,237,0.7), 0 0 80px rgba(59,130,246,0.3)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "border-shape": "border-shape 5s ease-in-out infinite",
        "fade-in-up":   "fade-in-up 0.8s ease-out forwards",
        float:          "float 6s ease-in-out infinite",
        "spin-slow":    "spin-slow 18s linear infinite",
        glow:           "glow 3s ease-in-out infinite",
        shimmer:        "shimmer 2.5s linear infinite",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
