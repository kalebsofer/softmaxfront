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
        // Traction landing page theme tokens, defined per color scheme in
        // app/traction/landing.css.
        tl: {
          bg: "var(--tl-bg)",
          fg: "var(--tl-fg)",
          body: "var(--tl-body)",
          muted: "var(--tl-muted)",
          hairline: "var(--tl-hairline)",
          divider: "var(--tl-divider)",
          "chip-fg": "var(--tl-chip-fg)",
          "chip-bg": "var(--tl-chip-bg)",
          "chip-alt-fg": "var(--tl-chip-alt-fg)",
          "chip-alt-bg": "var(--tl-chip-alt-bg)",
          "badge-bg": "var(--tl-badge-bg)",
          "badge-fg": "var(--tl-badge-fg)",
          "badge-kicker": "var(--tl-badge-kicker)",
          "phone-bg": "var(--tl-phone-bg)",
          "phone-border": "var(--tl-phone-border)",
          "qr-bg": "var(--tl-qr-bg)",
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
        "spin-slow": "spin 26s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
