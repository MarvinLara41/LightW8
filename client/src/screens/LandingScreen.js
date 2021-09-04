import React from "react";
import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    <div className="landing">
      <div className="landing-actions">
        <ul>
          <li>
            <h1>LightW8</h1>{" "}
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Create an Account</Link>
          </li>
          <h4>The simple workout tracker.</h4>
        </ul>
      </div>
    </div>
  );
}
