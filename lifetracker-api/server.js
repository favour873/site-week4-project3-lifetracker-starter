const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config");
const authRoutes = require("./routes/auth");
const security = require("./middleware/security");
const { BadRequestError, NotFoundError } = require("./utils/errors");
const app = express();
const nutritionRoutes = require("./routes/nutrition");
const activityRoutes = require("./routes/activity");

app.use(express.json());
app.use(cors());
// logs request info
app.use(morgan("tiny"));
// for every request, check if a token exists in the authorization header
// if it does, attach the decoded user to res.locals
app.use(security.extractUserFromJwt);
app.use("/auth", authRoutes);
app.use("/nutrition", nutritionRoutes);
app.use("/activity", activityRoutes);

app.use((req, res, next) => {
  return next(new NotFoundError());
});
app.use((err, req, res, next) => {
  const status = err.status || 500; // should be 404?
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

// const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// set PORT in terminal with PORT=3000 nodemon server.js
// FOR TERMINAL
// psql -f lifetracker
// psql
// \c lifetracker - t connect to lifetracker database
// \d+ - to see tables
// SELECT * FROM users - to see the content of users table
// \d+ users - to see the datatypes of the columns
// \q - to quit
