import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes: {
        hflip: {
          "0%": { transform: "rotateY(180deg)" },
          "50%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        hflip: "hflip 1s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
