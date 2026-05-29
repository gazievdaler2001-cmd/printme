import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium / Apple-inspired neutral palette
        ink: {
          DEFAULT: "#0f0f12",
          soft: "#3f3f46",
          mute: "#71717a",
        },
        // Violet brand accent (from design references)
        accent: {
          DEFAULT: "#7c3aed",
          dark: "#6d28d9",
          light: "#8b5cf6",
          soft: "#f5f3ff",
          softer: "#ede9fe",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,16,18,.04), 0 8px 24px rgba(16,16,18,.06)",
        float: "0 20px 60px rgba(124,58,237,.18)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg,#8b5cf6 0%,#7c3aed 50%,#6d28d9 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
