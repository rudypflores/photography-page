import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cooperhewitt: ["cooperhewitt", "sans-serif"],
        youngSerif: ["young-serif", "serif"],
      },
      backgroundImage: {
        "film-grain": "url('./images/grain-bgk.gif')",
      },
    },
  },
  plugins: [],
} satisfies Config;
