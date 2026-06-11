import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Standard structure routing path targets
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Nested structure backup routing path targets
    "./src/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#050506",       /* Pitch Onyx */
          card: "#0d0d11",     /* Slate Charcoal */
          cardHover: "#121218",/* Lit Slate */
          crimson: "#e11d48",  /* Accent Red */
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;