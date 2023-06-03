import React from "react";
import "../CSS/Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="container">
      <div className="form">
        <h2>SIGN UP</h2>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className="button">SIGN UP</button>
        <p>
          Already has an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
