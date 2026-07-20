/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        /** 企业站简约色：天空蓝主题 */
        xzh: {
          night: "#0f172a",
          panel: "#1e293b",
          mist: "#334155",
          mint: "#0ea5e9",
          "mint-bright": "#38bdf8",
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans SC"',
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        display: ['"Noto Sans SC"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
