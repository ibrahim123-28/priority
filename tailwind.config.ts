import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020024", // The Deep Neon Dusk Blue
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#00D4FF", // The Electric Cyan
          foreground: "#020024",
        },
        card: {
          DEFAULT: "rgba(2, 0, 36, 0.5)", // Dark glass for cards
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        // The specific blue-to-cyan glow seen in your video
        "neon-glow": "radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, rgba(2, 0, 36, 0) 70%)",
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};
export default config;