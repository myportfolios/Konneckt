const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        // Rule for processing CSS files
        test: /\.css$/,
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Resolves @import and url() paths in CSS
          {
            loader: "postcss-loader", // Processes CSS with PostCSS (including Tailwind)
            options: {
              postcssOptions: {
                // Make sure Tailwind and Autoprefixer are applied
                plugins: [
                  "tailwindcss", // Loads TailwindCSS
                  "autoprefixer", // Adds vendor prefixes automatically
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
