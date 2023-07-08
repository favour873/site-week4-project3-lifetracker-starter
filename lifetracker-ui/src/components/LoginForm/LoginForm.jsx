import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    navigate("/activity");
  };

  return (
    <div className="login-form">
      {error && <p className="error-message">{error}</p>}

      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>

        <label>Email:</label>
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="submit-login" type="submit">
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
