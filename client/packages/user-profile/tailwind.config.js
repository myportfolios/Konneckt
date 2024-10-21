// packages/user_profile/tailwind.config.js
const sharedConfig = require("../shared/styles/tailwind.config");

module.exports = {
  presets: [sharedConfig], // Extend with shared Tailwind config
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Local monorepo files
    "../shared/**/*.{js,jsx,ts,tsx,css}", // Shared components and styles
  ],
  theme: {
    extend: {
      // Monorepo-specific overrides can go here
    },
  },
};
