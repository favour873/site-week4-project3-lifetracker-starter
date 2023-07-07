import React from 'react'
import "./NavLinks.css"
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom"


const NavLinks = ({ username }) => {
  return (
    <div className="nav-links">
        NavLinks

        <nav>
        
            <NavLink to="/" className="logo"> PutLogoHere </NavLink>

            <NavLink to="/activity"> Activity </NavLink>
            <NavLink to="/exercise"> Exercise </NavLink>
            <NavLink to="/nutrition"> Nutrition </NavLink>
            <NavLink to="/sleep"> Sleep </NavLink>
            {/* conditionally render sign in and register */}
            {username ? (
            <>
                <span className="username">{username.toUpperCase()}</span>
                <NavLink className="logout-button" to="/signout"> Sign Out </NavLink>
            </>

            ) : (
            <>
                <NavLink to="/signin"> Sign In </NavLink>
                <NavLink to="/register"> Register </NavLink>
            </>
            )}

        </nav>
        
    </div>
  )
}

export default NavLinks