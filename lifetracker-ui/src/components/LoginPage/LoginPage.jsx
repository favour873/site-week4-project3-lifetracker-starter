import React from 'react'
import "./LoginPage.css"
import LoginForm from '../LoginForm/LoginForm'
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

const LoginPage = ({ username, onLogin, error }) => {

  return (
    <div className="login-page">
      <LoginForm username={username} onLogin={onLogin} error={error}/>
    </div>
  )
}

export default LoginPage