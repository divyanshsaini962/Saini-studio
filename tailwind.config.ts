import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        custom: ["Sainifont", "sans"], // Replace 'YourFontName' with the font-family name you imported
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        primeColor: "#6300F9",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    // Here you can add the font-face definition if needed
    fontFace: {
      'Sainifont': {
        'fontFamily': 'Sainifonts', // Font family name
        'fontStyle': 'normal',
        'fontWeight': 'normal',
        'src': 'url("/fonts/coolvetica_compressed_hv.otf") format("opentype")', // Font file path
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;