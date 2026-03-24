import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'GTWalsheimPro'", "sans-serif"],
        body: ["'GTWalsheimPro'", "sans-serif"],
        syne: ["'GTWalsheimPro'", "sans-serif"],
        dm: ["'GTWalsheimPro'", "sans-serif"],
      },
      colors: {
        // Brand palette — primary 3 colors
        brand: {
          dark:    "#093148",  // base dark
          accent:  "#0694D1",  // primary accent / CTA
          light:   "#E4F7FF",  // light tint / text
        },
        // Dark scale derived from #093148
        deep: {
          950: "#020F18",  // near-black
          900: "#041825",  // darkest section bg
          800: "#051E2D",  // dark bg
          700: "#071F30",  // alternate dark bg
          600: "#093148",  // BASE DARK — brand.dark
          500: "#0B3D57",  // elevated card bg
          400: "#0E4F72",  // border / divider
        },
        // Accent scale derived from #0694D1
        sky: {
          600: "#0694D1",  // BASE ACCENT — brand.accent
          500: "#08A8EC",  // hover state
          400: "#2BB8F0",  // lighter variant
          300: "#60CEFA",  // glow / highlight
          200: "#A8E5FF",  // muted accent
        },
        // Light scale derived from #E4F7FF
        ice: {
          100: "#E4F7FF",  // BASE LIGHT — brand.light
          200: "#C8EFFF",  // slightly deeper
          300: "#A0DEFF",  // muted light
          400: "#71C7F5",  // medium light
        },
      },
      backgroundImage: {
        // Core brand gradients
        "brand-gradient":   "linear-gradient(135deg, #093148 0%, #0694D1 100%)",
        "brand-gradient-r": "linear-gradient(135deg, #0694D1 0%, #093148 100%)",
        "accent-gradient":  "linear-gradient(135deg, #0694D1 0%, #2BB8F0 100%)",
        "light-gradient":   "linear-gradient(135deg, #0694D1 0%, #E4F7FF 100%)",
        "dark-gradient":    "linear-gradient(180deg, #020F18 0%, #093148 100%)",
        // Section fades
        "section-fade":     "linear-gradient(180deg, transparent 0%, rgba(4,24,37,0.8) 100%)",
        "hero-fade":        "linear-gradient(180deg, #020F18 0%, #041825 60%, #093148 100%)",
        // Decorative
        "card-shine":       "linear-gradient(135deg, rgba(228,247,255,0.05) 0%, rgba(228,247,255,0) 60%)",
        "blueprint-lines":  "linear-gradient(rgba(6,148,209,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,148,209,0.06) 1px, transparent 1px)",
        // Shimmer
        "shimmer":          "linear-gradient(90deg, rgba(228,247,255,0) 0%, rgba(228,247,255,0.08) 50%, rgba(228,247,255,0) 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        // Glow effects using #0694D1
        "glow":         "0 0 40px rgba(6,148,209,0.35)",
        "glow-sm":      "0 0 20px rgba(6,148,209,0.25)",
        "glow-lg":      "0 0 60px rgba(6,148,209,0.4)",
        "glow-light":   "0 0 30px rgba(228,247,255,0.15)",
        // Cards
        "card":         "0 4px 24px rgba(2,15,24,0.5), inset 0 1px 0 rgba(228,247,255,0.05)",
        "card-hover":   "0 8px 48px rgba(6,148,209,0.2), inset 0 1px 0 rgba(228,247,255,0.08)",
        "card-glow":    "0 0 0 1px rgba(6,148,209,0.3), 0 8px 40px rgba(6,148,209,0.15)",
      },
      animation: {
        float:        "float 6s ease-in-out infinite",
        shimmer:      "shimmer 2.5s linear infinite",
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "spin-slow":  "spinSlow 20s linear infinite",
        scroll:       "scroll 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%":   { transform: "scale(0.85)", opacity: "0.8" },
          "100%": { transform: "scale(1.6)",  opacity: "0" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        scroll: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
