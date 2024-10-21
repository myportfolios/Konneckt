const path = require("path");
module.exports = {
  // This is the configuration object that will be exported by this module.
  module: {
    // Defines the rules for how different types of modules (files) should be processed.
    rules: [
      {
        // Specifies a rule for processing files that match the regular expression /\.m?js$/.
        // This matches both .js and .mjs files.
        test: /\.m?js$/,
        // Excludes files located in the node_modules directory from being processed by this rule.
        exclude: /node_modules/,
        // Defines how to handle files that match the test condition.
        use: {
          // Specifies the loader to use for processing the files. In this case, it's babel-loader.
          loader: "babel-loader",
          // Options to pass to babel-loader for configuring Babel.
          options: {
            // Presets to use with Babel for transforming the code.
            // @babel/preset-react is used for transforming JSX and other React-specific syntax.
            // @babel/preset-env is used for transforming ES6+ code to be compatible with older environments.
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // Plugins to use with Babel for additional transformations.
            // @babel/plugin-transform-runtime is used to optimize the use of helper functions and polyfills.
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Resolves CSS imports and URLs
          "postcss-loader", // Processes CSS with PostCSS
        ],
      },
    ],
  },
};
