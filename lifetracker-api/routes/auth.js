const express = require("express");
const User = require("../models/user");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const security = require("../middleware/security");

router.get(
  "/me",
  security.requireAuthenticatedUser,
  async function (req, res, next) {
    try {
      const { email } = res.locals.user;
      const user = await User.fetchUserByEmail(email);
      return res.status(200).json({ user });
    } catch (err) {
      next(err);
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    //check if the email entered by the user exists in the DB.
    const getUserQuery = `
              SELECT * FROM users
              WHERE email = $1
          `;

    //execute the query
    const result = await db.query(getUserQuery, [email]);
    //store the user data returned from the query
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    //check if the password entered is correct
    //user.password is the password which is stored in the DB
    //password is the user input
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    //Generate and sign JWT token, store secret-key in .env
    const token = jwt.sign(
      { userId: user.id, userName: user.username },
      "secret-key-unique",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token: token,
      user: user,
    });
  } catch (error) {
    console.error("Error logging in: ", error);
    res.status(500).json({ message: "Error Logging in" });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.register(req.body);

    //Generate and sign JWT token, store secret-key in .env
    const token = jwt.sign(
      { userId: user.id, userName: user.username },
      "secret-key-unique",
      {
        expiresIn: "1h",
      }
    );

    return res.status(201).json({
      message: "User registered successfully",
      token: token,
      user: user,
    });
  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).json({ message: "Error registering user" });
    // next(error)
  }
});

// router.post("/register", async (req, res, next) => {
//     console.log({
//         "context": "auth.js/register",
//         "req.body": req.body
//     })
// })

module.exports = router;
