import React from "react";
import "../CSS/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <div className="form">
        <h2>LOGIN</h2>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="check">
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check"> Remember me?</label>
        </div>
        <button className="button">LOGIN</button>
        <p>
          Not made any account?<Link to="/">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
