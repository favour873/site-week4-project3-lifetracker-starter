import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
// import Home from "../Home/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default function Navbar({ username, handleLogout }) {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/" className="logo">
          <Logo />
        </NavLink>
        <NavLink to="/activity"> Activity </NavLink>
        <NavLink to="/exercise"> Exercise </NavLink>
        <NavLink to="/nutrition"> Nutrition </NavLink>
        <NavLink to="/sleep"> Sleep </NavLink>
        {/* conditionally render sign in and register */}
        {username ? (
          <>
            <NavLink className="sign-out" to="/">
              <button onClick={handleLogout}> Sign Out </button>
            </NavLink>
            <NavLink>
              {" "}
              <span className="username">{username.toUpperCase()}</span>{" "}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signin"> Sign In </NavLink>
            <NavLink to="/register"> Register </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}
