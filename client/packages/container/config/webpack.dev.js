// Import the 'merge' function from the 'webpack-merge' package to combine configurations.
const { merge } = require("webpack-merge");

// automating shared modules/dependencies using webpack.
const packageJson = require("../package.json");

// Import the 'HtmlWebpackPlugin' to generate an HTML file with the output bundles included.
const HtmlWebpackPlugin = require("html-webpack-plugin");

//import ModuleFederationPlugin
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
    port: 8080,
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
      // Unique name for this host container application; used to identify it when resolving remote modules.
      name: "container",

      // Configuration for remote applications that this container will consume.
      // The key is a local alias that will be used to import the remote module.
      // The value is the name and URL of the remote module.
      remotes: {
        // The local alias 'userProfile' will be used to import modules from the remote application.
        // 'userprofile' is the name specified in the remote application's ModuleFederationPlugin configuration.
        // 'http://localhost:8081' is the URL where the remote module is served.
        userProfile: "userProfile@http://localhost:8081/remoteEntry.js", //
      },
      shared: packageJson.dependencies,
    }),
  ],
};

// Merge the common configuration with the development-specific configuration and export it.
// putting devConfig after commonConfig implies that if there are same config in both dir, the one in devConfig will take more
// importance over the one in commonConfig.
module.exports = merge(commonConfig, devConfig);
