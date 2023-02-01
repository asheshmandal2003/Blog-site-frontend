import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
      <div className="log-in">
        <form className="log-in-wrapper">
          <h2 className="log-in-header">Sign In</h2>
          <div className="input-container">
            <label className="inputs">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="input-box"
            />
          </div>
          <div className="input-container">
            <label className="inputs">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="input-box"
            />
          </div>
          <div className="remember">
            <input type="checkbox" className="checkbox"/>
            <label className="inputs">Remember me</label>
          </div>
          <button className="log-in-button">Submit</button>
          <div className="forgot-password-container">
            <div className="forgot-password">
              Forgot <Link>password?</Link>
            </div>
          </div>
        </form>
      </div>
  );
}

export default SignIn;
