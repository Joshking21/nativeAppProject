/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure this covers your folder structure (app/ and components/ are standard)
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  
  // CRITICAL: You must add this preset for NativeWind to work
  presets: [require("nativewind/preset")],
  
  theme: {
    extend: {
      colors: {
        primary: "#00A86B",
        secondary: "#538165",
        tertiary: "#E86C6E",
        neutral: "#1A1C1E",
      },
    },
  },
  plugins: [],
};