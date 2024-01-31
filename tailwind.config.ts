import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundRepeat: {
        repeat: "repeat",
      },
      fontFamily: {
        custom: ["var(--font-barlow)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: Function }) {
      addVariant(
        "supports-backdrop-blur",
        "@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
      )
      addVariant(
        "supports-scrollbars",
        "@supports selector(::-webkit-scrollbar)"
      )
      addVariant("scrollbar", "&::-webkit-scrollbar")
      addVariant("scrollbar-track", "&::-webkit-scrollbar-track")
      addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb")
    },
  ],
}
export default config
