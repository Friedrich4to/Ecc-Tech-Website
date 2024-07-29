import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '3xl': '1440px',
      },
      spacing: {
        '5vw': '5vw',
        '80s': '80vh',
        '50s': '50vh',
      },
      screens: {
        '3xl': '1440px',
        // => @media (min-width: 640px) { ... }
      },
      colors: {
        'ecc_red': '#AF1212',
        'ecc_blue': '#0A538B',
        'ecc_low_blue': '#E4E8EC',
        'ecc_white': '#F6F6F6',
        'ecc_black': '#141414',
        'ecc_gray': '#616060',
      }
    },
  },
  plugins: [],
};
export default config;
