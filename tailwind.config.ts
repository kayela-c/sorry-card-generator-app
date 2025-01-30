import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  daisyui: {
    themes: ["light", "dark", "cymk"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      textShadow: {
        double: "2px 2px 0px black, 4px 4px 0px white",
      },
      textStrokeWidth: {
        "1": "1px",
        "2": "2px",
      },
      backgroundImage: {
        "conic-four":
          "conic-gradient(yellow 0% 15%, green 15% 37%, red 37% 63%, blue 63% 85%, yellow 85% 100%)",
        "slash-four":
          "linear-gradient(to bottom right, yellow 0% 24%, green 25% 49%, red 50% 74%, blue 75% 100%)",
      },
      keyframes: {
        hflip: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
      animation: {
        hflip: "hflip 1s ease-in-out",
        shake: "shake 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
