import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1C2E",       // deep indigo background — the "night bazaar"
        surface: "#16273F",   // card surface
        border: "#2A3B52",
        paper: "#F5F0E6",     // warm off-white text
        marigold: "#F2A93B",  // primary accent — festival marigold / saffron
        rupee: "#2FA88A",     // secondary accent — banknote teal
        rupeeDark: "#1F7A62",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        ticket: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
