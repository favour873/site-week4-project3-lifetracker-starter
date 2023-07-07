import React, {useState, useEffect } from 'react'
import jwtDecode from "jwt-decode"
import './App.css'
import Landing from "../Landing/Landing"
import ActivityPage from "../ActivityPage/ActivityPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import NutritionPage from "../NutritionPage/NutritionPage"
import SleepPage from "../SleepPage/SleepPage"
import LoginPage from '../LoginPage/LoginPage'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import Navbar from '../Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [LoginError, setLoginError] = useState("")
  const [userName, setUserName] = useState();


  useEffect(() => {
    const checkLoggedIn = () => {
      // check if user is logged in when first logged in
      const token = localStorage.getItem("token")
      if (token) {
        // decode the stored token
        const decodedToken = jwtDecode(token)
        setUserName(decodedToken.userName)

        if (decodedToken.exp * 1000 > Date.now()) {
          setLoggedIn(true)

        } else {
          // token has expired, log out the user
          handleLogout();
        }
      }
    }
    checkLoggedIn();
  }, [])

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      })

      const data = await response.json()
      if (response.status === 200) {

        // get token information and store in local storage
        const { token } = data
        localStorage.setItem("token", token)

        // decode the token
        const decodedToken = jwtDecode(token)
        setUserName(decodedToken.userName)

        setLoggedIn(true)
        setLoginError("")
        console.log(data.message)
        console.log(data.user.username)

      } else {
        setLoginError(data.message)
        console.log(data.message)
      }

    } catch(error) {
      console.log("Error:", error)
    }
  }


  // handles registration
  const handleRegistration = async (username, password, firstname, lastname, email) => {
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password, firstname, lastname, email})
      })

      const data = await response.json()
      if (response.status === 201) {

        // get token information and store in localStorage
        const { token } = data
        localStorage.setItem("token", token)

        const decodedToken = jwtDecode(token)
        setUserName(decodedToken.userName)

        setLoggedIn(true)
        console.log(data.message)
      } else {
        console.log(data.message)
      }
    } catch(error) {
      console.log("Error:", error)
    }
  }

  const handleLogout = () => {
    // remove the stored token and set loggin as false
    console.log("user is logged out")
    
    setLoggedIn(false)
    setUserName()
    localStorage.removeItem("token")
  }

  return (
    <div className="app">

      <Router>

        <main>
          <Navbar username={userName} handleLogout={handleLogout}/>

          <Routes>
            <Route path="/" element={ <Landing/> }/>
            <Route path="signin" element={ <LoginPage username={userName} onLogin={handleLogin} error={LoginError}/> }/>
            <Route path="register" element={ <RegistrationPage username={userName} onRegister={handleRegistration}/> }/>

            {loggedIn ? 
            ( <> 
              {/* <h2> {userName}, You are logged in! </h2>  */}
              {/* <button onClick={handleLogout}> Logout </button>  */}
              <Route path="activity" element={ <ActivityPage/> }/>
              <Route path="exercise" element={ <ExercisePage/> }/>
              <Route path="nutrition" element={ <NutritionPage/> }/>
              <Route path="sleep" element={ <SleepPage/> }/>
              </>
            )
            : null }
          </Routes>
          {/* logout should route to homepage */}
          {/* <button onClick={handleLogout}> Logout </button>  */}

        </main>
      </Router>
    </div>
  )
}

export default App


// // - [x] Build the `App` component to:
// //   - [x] Be wrapped by an element with the class name of `app`
// //   - [x] Contain the routes for the app
// //   - [x] Render the `Navbar` component on every route
// //   - [x] Render a `BrowserRouter` component that contains a `Routes` component with the following routes:
// //     - [x] `/` - Render the `Landing` component
// //     - [x] `/login` - Render the `LoginPage` component
// //     - [x] `/register` - Render the `RegistrationPage` component
// //     - [ ] `/activity` - Render the `ActivityPage` component **only** if the user is logged in, otherwise it renders the `AccessForbidden` component
// //     - [ ] `/nutrition/*` - Render the `NutritionPage`component **only** if the user is logged in, otherwise it renders the`AccessForbidden` component
// //     - [ ] `*` - Anything else renders the `NotFound` component

