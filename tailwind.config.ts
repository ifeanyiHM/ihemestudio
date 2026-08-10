import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08090A",
          900: "#0D0E10",
          800: "#141618",
          700: "#1C1E22",
          600: "#252830",
          500: "#2F333B",
        },
        teal: {
          DEFAULT: "#00D4AA",
          dim: "#00B891",
          glow: "#00FFD0",
          subtle: "rgba(0,212,170,0.12)",
          border: "rgba(0,212,170,0.25)",
        },
        slate: {
          DEFAULT: "#A0A8B4",
          light: "#C8CDD6",
          muted: "#6B7280",
        },
        cream: "#F5F4F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "display-2xl": [
          "4.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-xxl": [
          "4rem",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-xl": [
          "3.5rem",
          { lineHeight: "1.08", letterSpacing: "-0.025em" },
        ],
        "display-x": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": [
          "2.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "2rem",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        "display-sm": [
          "1.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
      },
      spacing: {
        section: "7rem",
        "section-xl": "9rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "float-slower": "float-slower 6.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "teal-sm": "0 0 20px rgba(0,212,170,0.15)",
        "teal-md": "0 0 40px rgba(0,212,170,0.2)",
        "teal-lg": "0 0 80px rgba(0,212,170,0.25)",
        card: "0 1px 3px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.3)",
        "card-hover":
          "0 4px 24px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,170,0.12)",
      },
      screens: {
        xxl: "1440px",
        xxxl: "1536px",
        xl3: "1680px",
        xl4: "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
