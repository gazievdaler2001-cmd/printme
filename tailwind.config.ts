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
          DEFAULT: "#0a0a0a",
          soft: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#ff4d2e", // "red sun" brand accent (samurai catalog vibe)
          soft: "#ff7a5c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
