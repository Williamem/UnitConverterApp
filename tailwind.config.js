/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./(screens|components)/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
              // Main background colors
              background: {
                primary: '#ffffff',     // Pure white for main backgrounds
                secondary: '#f8fafc',   // Slight off-white (slate-50) for secondary backgrounds
                tertiary: '#f1f5f9',    // Slightly darker (slate-100) for cards/sections
              },
              // Text colors
              text: {
                primary: '#334155',     // slate-700 for main text
                secondary: '#64748b',   // slate-500 for secondary text
                tertiary: '#94a3b8',    // slate-400 for disabled/subtle text
              },
              // UI element colors
              ui: {
                primary: '#475569',     // slate-600 for primary buttons/elements
                secondary: '#cbd5e1',   // slate-300 for secondary buttons/borders
                hover: '#334155',       // slate-700 for hover states
                active: '#1e293b',      // slate-800 for active states
              },
              // Accent colors
              accent: {
                red: '#ef4444',         // red-500 for warnings/errors
                redHover: '#dc2626',    // red-600 for warning hover states
                redLight: '#fee2e2',    // red-100 for warning backgrounds
              },
              // Border colors
              border: {
                light: '#e2e8f0',       // slate-200 for light borders
                medium: '#cbd5e1',      // slate-300 for medium borders
              },
            },
          },
      /* Add custom theme here
      ex:
      colors: {
        primary: '#000000',
      },
      */
      extend: {},
    },
    plugins: [],
  }