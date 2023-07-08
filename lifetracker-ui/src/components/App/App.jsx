import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import "./App.css";
import Landing from "../Landing/Landing";
import ActivityPage from "../ActivityPage/ActivityPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionPage from "../NutritionPage/NutritionPage";
import SleepPage from "../SleepPage/SleepPage";
import LoginPage from "../LoginPage/LoginPage";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import Navbar from "../Navbar/Navbar";
import LoginPrompt from "../LoginPrompt/LoginPrompt";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [LoginError, setLoginError] = useState("");
  const [userName, setUserName] = useState();
  const [userId, setUserID] = useState();
  const [nutritiondata, setNutritionData] = useState([]);
  const [avgCalories, setAvgCalories] = useState(0);

  useEffect(() => {
    const checkLoggedIn = async () => {
      // check if user is logged in when first logged in
      const token = localStorage.getItem("token");
      if (token) {
        // decode the stored token
        const decodedToken = await jwtDecode(token);
        setUserName(decodedToken.userName);
        setUserID(decodedToken.userId);

        if (decodedToken.exp * 1000 > Date.now()) {
          setLoggedIn(true);
        } else {
          // token has expired, log out the user
          handleLogout();
        }
      }
    };
    checkLoggedIn();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(
        "https://lifetracker-api-9ifj.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (response.status === 200) {
        // get token information and store in local storage
        const { token } = data;
        localStorage.setItem("token", token);

        // decode the token
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.userName);
        setUserID(decodedToken.userId);

        setLoggedIn(true);
        setLoginError("");
        console.log(data.message);
        // console.log(data.user.username);
      } else {
        setLoginError(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleRegistration = async (
    username,
    password,
    firstname,
    lastname,
    email
  ) => {
    try {
      const response = await fetch(
        "https://lifetracker-api-9ifj.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            firstname,
            lastname,
            email,
          }),
        }
      );

      const data = await response.json();
      if (response.status === 201) {
        // get token information and store in localStorage
        const { token } = data;
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.userName);
        setUserID(decodedToken.userId);

        setLoggedIn(true);
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName();
    setNutritionData([]);
    localStorage.removeItem("token");
  };

  const handleSubmitNutrition = async (form) => {
    try {
      console.log(form);
      const { name, quantity, calories, imageurl, category } = form;
      const response = await fetch(
        "https://lifetracker-api-9ifj.onrender.com/nutrition",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            quantity,
            calories,
            imageurl,
            category,
            userId,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleGetNutrition = async (userId) => {
    try {
      const response = await fetch(
        `https://lifetracker-api-9ifj.onrender.com/nutrition/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setNutritionData(data.userNutritionData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleGetAvgCalories = async (userId) => {
    try {
      const response = await fetch(
        `https://lifetracker-api-9ifj.onrender.com/activity/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setAvgCalories(data.avgCalories);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar username={userName} handleLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="signin"
              element={
                <LoginPage
                  username={userName}
                  onLogin={handleLogin}
                  error={LoginError}
                />
              }
            />
            <Route
              path="register"
              element={
                <RegistrationPage
                  username={userName}
                  onRegister={handleRegistration}
                />
              }
            />

            {
              loggedIn ? (
                <>
                  <Route
                    path="activity"
                    element={
                      <ActivityPage
                        userId={userId}
                        onGet={handleGetAvgCalories}
                        avgCalories={avgCalories.avg}
                      />
                    }
                  />
                  <Route path="exercise" element={<ExercisePage />} />
                  <Route
                    path="nutrition"
                    element={
                      <NutritionPage
                        userId={userId}
                        username={userName}
                        onSubmit={handleSubmitNutrition}
                        onGet={handleGetNutrition}
                        nutritiondata={nutritiondata}
                      />
                    }
                  />
                  <Route path="sleep" element={<SleepPage />} />
                </>
              ) : null
              // <Route path="login"> element={<LoginPrompt />} </Route>
              // <h3> Just One More Step, Log In </h3>
            }
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
