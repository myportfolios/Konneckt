import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
};

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV == "development") {
  const marketingRoot = document.querySelector("#_user-profile-dev-root");
  if (marketingRoot) mount(marketingRoot);
}
//we are running through Container, and we should export the 'mount' function.
export { mount };
/**
 * bootstrap.js
 * We use this file to do the actual rendering of component onto the screen - View
 */
