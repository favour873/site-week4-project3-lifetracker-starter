import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <span className="logo">
      <a href="/">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1554322662-5b660295377d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          alt="codepath logo"
        />{" "}
      </a>
    </span>
  );
};

export default Logo;
