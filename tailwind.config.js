/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep": "#1A1F3C",
        "gold-primary": "#D4AF37",
        "gold-light": "#F5E17A",
        "surface-pure": "#FFFFFF",
        "surface-muted": "#F9FAFB",
        "amber-highlight": "#F59E0B",
        "primary-container": "#d4af37",
        secondary: "#585c7d",
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
        display: ["DM Sans", "sans-serif"],
        label: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "gold": "0 4px 20px -4px rgba(212, 175, 55, 0.08)",
        "gold-deep": "0 12px 40px -8px rgba(26, 31, 60, 0.04), 0 4px 20px -4px rgba(212, 175, 55, 0.08)",
      },
    },
  },
  plugins: [],
};