import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handle = async (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate("/otp");
  };
  return (
    <form onSubmit={handle}>
      <div className="container">
        <div className="design">
          <div className="pill-1 rotate-45    " />
          <div className="pill-2 rotate-45" />
          <div className="pill-3 rotate-45" />
          <div className="pill-4 rotate-45" />
        </div>

        <div className="login">
          <h3 className="title">User Login</h3>

          <div className="text-input">
            <i className="ri-user-fill" />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            LOGIN
          </button>
          <a href="#" className="forgot">
            Forgot Password?
          </a>
          <div className="create">
            <a href="#">Create Your Account</a>
            <i className="ri-arrow-right-fill" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
