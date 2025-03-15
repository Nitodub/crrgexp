import { easeInOut } from "framer-motion";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      keyframes : {
        lightning: {
        "0%": {opacity: "0.2"},
        "5%": {opacity: "0"},
        "7%": {opacity: "0.4"},
        "8%": {opacity: "0"},
        "100%": {opacity: "0"},
        }
      },

      animation: {
        lightning: "lightning 3s ease-in-out infinite"
      },

      backgroundImage: {
        'heroBG': "url('../public/HeroBG.png')",
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crrg: "#fec11d",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
