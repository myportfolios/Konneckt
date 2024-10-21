import React from "react";
import { Link } from "react-router-dom";

// import Basic from "@3triplea/reacom/src/components/Buttons/Basic/Basic"

// import TextLabel from "../../../../stories/components/TextLabel/TextLabel.jsx";

const btn = {
  border: "2px solid red",
};

export default function LandingPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="header-style">LandingPage</h1>
      {/* <Basic variant="contained" label="basic button" /> */}
      {/* <TextLabel key="Name" value="Alex" /> */}
      <div style={{ display: "flex" }}>
        <button
          style={{
            border: "2px solid red",
            cursor: "pointer",
            marginRight: "20px",
          }}
          className="btn"
        >
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Go to login page
          </Link>
        </button>
        <button style={{ border: "2px solid red", cursor: "pointer" }}>
          <Link
            to="/logout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Go to logout page
          </Link>
        </button>
      </div>
    </div>
  );
}
