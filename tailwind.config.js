/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      },
      screens: {
        'xs': '360px',  // Extra small devices
        'sm': '640px',  // Small devices
        'md': '768px',  // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
        '2xl': '1536px', // 2XL devices
        '3xl': '1920px', // 3XL devices
      },
    },
  },
  plugins: [],
};