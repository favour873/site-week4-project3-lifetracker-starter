import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero-text">
          <h1> Stay Healthy, </h1>
          <h2> Track your health activities</h2>
        </div>
        <img
          className="hero-img"
          alt="hero img"
          src="src/components/Landing/Hero.jpg"
        />
      </div>
    </div>
  );
};

export default Landing;
