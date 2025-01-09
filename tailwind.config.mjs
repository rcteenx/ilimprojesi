/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ["var(--font-base)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#8c8c8c",
        },

        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        indigo: {
          DEFAULT: "#333366",
          light: {
            1: "#444477",
            2: "#555588",
            3: "#666699",
            4: "#7777AA",
            5: "#8888BB",
          },
          dark: {
            1: "#2A2A5C",
            2: "#1F1F50",
            3: "#141446",
            4: "#0A0A3B",
            5: "#000031",
          },
        },
        accent: {
          DEFAULT: "#FFD700",
        },
        indigo2: "#5b5b84",
        gray40: "#666666",
        "coral-red": "#FF6452",
        "indigo-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      backgroundImage: (theme) => ({
        space: "url('/assets/images/theme/bg-hero-1920-480.png')",
        hMerhaba: "url('/assets/images/merhaba/home.jpg')",
        rMerhaba: "url('/assets/images/merhaba/reyhan.jpg')",
      }),
    },
  },
  plugins: [],
};
