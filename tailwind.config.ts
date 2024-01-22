import { type Config } from "tailwindcss";
import { fontFamily, colors } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      foreground: "#D2D6EF",
      banner: "#3F4669",
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
