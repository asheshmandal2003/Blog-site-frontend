import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <form className="sign-up-wrapper">
          <h2 className="sign-up-header">Sign Up</h2>
          <div className="input-container">
            <label className="inputs">First Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="input-box"
            />
          </div>
          <div className="input-container">
            <label className="inputs">Last Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              className="input-box"
            />
          </div>
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
          <button className="sign-up-button">Sign Up</button>
          <div className="sign-in-option">
            Already registered <NavLink to={"/login"}>sign in?</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
