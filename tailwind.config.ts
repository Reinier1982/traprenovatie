import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroImage: "url('../image/bovenzijde trap horizontaal.png')",
        firstImage: "url('/Trap met grijze treden.jpeg')",
        secondImage: "url('/Trap met witte treden en antraciete wangen.jpeg')",
        thirdImage: "url('/Trap met antraciente treden.jpeg')",
        fourthImage: "url('/Open trap met eiken treden.jpeg')",
        fifthImage: "url('/Antraciete trap met verlichting.jpeg')",
        sixthImage: "url('/Eiken trap vanaf boven.jpeg')",
        seventhImage:
          "url('/Eiken trap met zwarte stootborden en verlichting.jpeg')",
        eightImage: "url('/Trap met traplift.jpeg')",
        ninthImage: "url('/Zwarte trap met verlichting.jpeg')",
      },
      brightness: {
        25: ".25",
        175: "1.75",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [],
};
export default config;
