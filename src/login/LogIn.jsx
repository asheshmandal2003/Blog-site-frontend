import { NavLink } from "react-router-dom";
import "./login.css";

export default function LogIn() {
  return (
    <div className="login">
      <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          className="loginInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="loginInput"
        />
        <button className="loginSubmit">Login</button>
      </form>
      <button className="loginSignUp">
        <NavLink to={"/signup"} style={{ color: "white" }}>
          Sign up
        </NavLink>
      </button>
    </div>
  );
}
