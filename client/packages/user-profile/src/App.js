import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logout from "./components/logout";
import Login from "./components/login";
import LandingPage from "./components/LandingPage";

import "./index.css";

import "@reacom/react-hive/dist/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}
