import "./signup.css";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup">
      <h1 className="signupTitle">Sign Up</h1>
      <form className="signupForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter an username..."
          className="signupInput"
          autoFocus={true}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          className="signupInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="signupInput"
        />
        <button className="signupSubmit">Sign up</button>
      </form>
      <button className="signupSignUp">
        <NavLink to={"/login"} style={{ color: "white" }}>
          Login
        </NavLink>
      </button>
    </div>
  );
}
