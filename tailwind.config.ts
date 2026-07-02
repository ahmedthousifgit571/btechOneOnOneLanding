import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Page backgrounds
        ink: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFAF8",
          line: "#F0EDE8",
        },
        // True black for text / footer / borders / shadows
        dark: {
          DEFAULT: "#0F0F0F",
          soft: "#1A1A1A",
        },
        // Mustard yellow — the ONE accent (avoid 'amber' — Tailwind built-in conflicts)
        mustard: {
          DEFAULT: "#E8A804",
          light: "#F5C842",
          muted: "#FFF3C0",
        },
        // Muted gray text
        sand: {
          DEFAULT: "#555555",
          muted: "#888888",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 60% at 70% 20%, rgba(232,168,4,0.14) 0%, rgba(232,168,4,0.04) 55%, transparent 80%)",
        "ember-card":
          "radial-gradient(100% 80% at 50% 110%, rgba(232,168,4,0.18) 0%, rgba(232,168,4,0.06) 50%, transparent 80%)",
        "ember-corner":
          "radial-gradient(80% 80% at 10% 110%, rgba(232,168,4,0.14) 0%, rgba(232,168,4,0.05) 50%, transparent 80%)",
        "ember-warm":
          "linear-gradient(120deg, rgba(232,168,4,0.08) 0%, rgba(232,168,4,0.03) 55%, transparent 100%)",
      },
      boxShadow: {
        card: "0 22px 60px -28px rgba(0,0,0,0.10)",
        glow: "0 0 0 2px rgba(232,168,4,0.55), 0 26px 60px -24px rgba(0,0,0,0.15)",
        "ember-ring": "0 0 0 2px rgba(232,168,4,0.60)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        marquee: "marquee 28s linear infinite",
        "glow-drift": "glow-drift 10s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.08)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
