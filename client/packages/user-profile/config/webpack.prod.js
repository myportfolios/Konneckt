const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Plugin to generate an HTML file
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Plugin to extract CSS into separate files
const { merge } = require("webpack-merge"); // Function to merge common and production configurations
const common = require("./webpack.common.js"); // Import the common configuration

module.exports = merge(common, {
  mode: "production", // Set mode to 'production' for built-in optimizations like minification
  output: {
    path: path.resolve(__dirname, "build"), // Output directory for the build files
    filename: "bundle.[contenthash].js", // Filename with content hash for cache busting
    publicPath: "/", // Public URL of the output directory when referenced in a browser
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Apply this rule to .css files
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files for better performance
          "css-loader", // Resolves CSS imports and URLs
          "postcss-loader", // Processes CSS with PostCSS (e.g., for autoprefixing)
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML file to use
      minify: {
        collapseWhitespace: true, // Remove whitespace from HTML
        removeComments: true, // Remove comments from HTML
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Output filename for CSS with content hash for cache busting
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Split chunks for all types of chunks (e.g., dynamic imports)
    },
    runtimeChunk: "single", // Extract runtime code into a separate file to improve caching
  },
});
