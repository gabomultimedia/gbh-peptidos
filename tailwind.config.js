/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep": "#003366",
        "gold-primary": "#003366",
        "gold-light": "#7CE9FF",
        "surface-pure": "#FFFFFF",
        "surface-muted": "#F4F9FC",
        "amber-highlight": "#F59E0B",
        "primary-container": "#00BFFF",
        secondary: "#4A657A",
        "surface-container": "#e7eefe",
        "surface-container-high": "#e2e8f8",
        "surface-container-low": "#f0f3ff",
        "on-surface": "#151c27",
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-tablet": "32px",
        "margin-desktop": "48px",
        gutter: "24px",
        "container-max": "1280px",
        unit: "8px",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        label: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        "gold": "0 4px 20px -4px rgba(0, 51, 102, 0.08)",
        "gold-deep": "0 12px 40px -8px rgba(0, 51, 102, 0.08), 0 4px 20px -4px rgba(0, 191, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
