// Import the 'merge' function from the 'webpack-merge' package to combine configurations.
const { merge } = require("webpack-merge");

// Import the 'HtmlWebpackPlugin' to generate an HTML file with the output bundles included.
const HtmlWebpackPlugin = require("html-webpack-plugin");

// automating shared modules/dependencies using webpack.
const packageJson = require("../package.json");

//import ModuleFederationPlugin to integerate mini apps together.
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// Import the common Webpack configuration from a separate file.
const commonConfig = require("./webpack.common");

// Define the development-specific Webpack configuration.
const devConfig = {
  // Set the mode to 'development', which enables useful development features like source maps.
  mode: "development",
  // Configuration for the Webpack Dev Server.
  devServer: {
    host: "0.0.0.0", // Listen on all network interfaces
    // Define the port on which the development server will run.
    port: 8081,
    // Configure the history API fallback to serve the `index.html` file for all routes.
    // This is useful for single-page applications (SPAs) to handle client-side routing.
    historyApiFallback: {
      index: "index.html",
    },
  },
  // List of plugins to use in the development configuration.
  plugins: [
    // Create an instance of HtmlWebpackPlugin to generate an HTML file.
    // This file will use the provided template and include the output bundles automatically.
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to the HTML template.
    }),
    new ModuleFederationPlugin({
      // Unique name for this remote module; used to identify it in the host/container application.
      name: "userProfile",

      // Filename for the remote entry file that will be dynamically loaded by the host/container.
      filename: "remoteEntry.js",

      exposes: {
        // Defines which modules from this remote application will be exposed for other applications to consume.
        // "./UserProfileApp" is the exposed module name that other applications will use to import it.
        "./UserProfileApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

// Merge the common configuration with the development-specific configuration and export it.
// putting devConfig after commonConfig implies that if there are same config in both dir, the one in devConfig will take more
// importance over the one in commonConfig.
module.exports = merge(commonConfig, devConfig);
