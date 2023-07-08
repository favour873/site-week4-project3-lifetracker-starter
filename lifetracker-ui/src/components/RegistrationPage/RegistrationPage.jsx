import React from "react";
import "./RegistrationPage.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const RegistrationPage = ({ onRegister, username }) => {
  return (
    <div className="registration-page">
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationPage;
