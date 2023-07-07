import React, { useState } from "react";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";


const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 


  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username, password, firstname, lastname, email);
    navigate("/activity")
  };

  return (
      <div className="registration-form">
        <h2>Registration</h2>

        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Firstname: </label>
          <input
            className="form-input"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <label>Lastname: </label>
          <input
            className="form-input"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <label>Email: </label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />          

          <label>Password: </label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label> Confirm Password: </label>
          <input
            className="form-input"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="submit-registration" type="submit"> Create Account </button>
        </form>
        
      </div>
  );
};

export default RegistrationForm;