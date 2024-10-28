module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Local monorepo files
    "./node_modules/@reacom/react-hive/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Monorepo-specific overrides can go here
    },
  },
};
