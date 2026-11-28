import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "40px",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Archivo", "Helvetica", "Arial", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        // Traction landing page only; the variables come from next/font in app/traction.
        satoshi: ["var(--font-satoshi)", "var(--font-inter)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#fbfaf8",
        ink: "#0a0a0a",
        wash: "#f4f2ee",
        hairline: "rgba(10,10,10,0.08)",
        // Traction landing page tokens, defined in app/traction/landing.css.
        tl: {
          text: "var(--tl-text)",
          "text-secondary": "var(--tl-text-secondary)",
          "text-muted": "var(--tl-text-muted)",
          "text-supporting": "var(--tl-text-supporting)",
          "text-inverse": "var(--tl-text-inverse)",
          "text-display": "var(--tl-text-display)",
          background: "var(--tl-background)",
          card: "var(--tl-card)",
          tertiary: "var(--tl-tertiary)",
          surface: "var(--tl-surface)",
          "segment-selected": "var(--tl-segment-selected)",
          divider: "var(--tl-divider)",
          "divider-subtle": "var(--tl-divider-subtle)",
          border: "var(--tl-border)",
          "ring-track": "var(--tl-ring-track)",
          primary: "var(--tl-primary)",
          "primary-soft": "var(--tl-primary-soft)",
          peach: "var(--tl-peach)",
          bezel: "var(--tl-bezel)",
          "band-fill-dedicated": "var(--tl-band-fill-dedicated)",
          "medal-gold": "var(--tl-medal-gold)",
          "medal-silver": "var(--tl-medal-silver)",
          "medal-bronze": "var(--tl-medal-bronze)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
        },
      },
      boxShadow: {
        "tl-card": "var(--tl-shadow-card)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
