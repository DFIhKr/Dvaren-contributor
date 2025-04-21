
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // n8n.io inspired light/dark palette & extra glass color
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        glass: "rgba(255,255,255,0.08)",
        n8n: {
          orange: "#FF6B1A",
          green: "#66D19E",
          turquoise: "#13ADC7",
          blue: "#3A6DF0",
          violet: "#8458FF",
          dark1: "#191C27",
          dark2: "#232634",
          dark3: "#292D3E",
          gray: "#8B909B",
          glass: "rgba(255,255,255,0.03)",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // default playful font
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      },
      boxShadow: {
        n8n: "0 2px 12px 0 rgba(12,17,30,.07), 0 1.5px 10px 0 rgba(95, 39, 205, 0.04)",
        glass: "0 6px 32px 0 rgba(20,24,31,.19)",
        fun: '0 8px 32px 0 rgba(30, 174, 219, 0.10), 0 1.5px 10px 0 rgba(95, 39, 205, 0.08)',
      },
      keyframes: {
        'fade-in': {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        'pop': {
          "0%": { transform: "scale(0.96)" },
          "60%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0.4,0,0.2,1)',
        'pop': 'pop 0.3s cubic-bezier(0.4,0,0.2,1)',
      },
      backgroundImage: {
        "n8n-hero": "linear-gradient(120deg,#1A1F2C 0%,#403E43 80%)",
        "n8n-glass": "linear-gradient(120deg,rgba(255,255,255,0.01) 40%,rgba(255,255,255,0.05) 100%)",
        "n8n-orange": "linear-gradient(90deg, #FF6B1A 0%, #FFB86C 100%)",
        "n8n-green": "linear-gradient(90deg,#13ADC7 0%,#66D19E 100%)",
        "n8n-body": "linear-gradient(135deg,#232634 0%,#292D3E 100%)"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

