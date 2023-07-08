require("dotenv").config();
require("colors");

// note use of ternary operator
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const SECRET_KEY = process.env.SECRET_KEY || "JQIdlesR150gYw";

function getDatabaseUri() {
  // const dbUser = process.env.DATABASE_USER || "postgres"
  // const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
  // const dbHost = process.env.DATABASE_HOST || "localhost"
  // const dbPort = process.env.DATABASE_PORT || 5432
  // const dbName = process.env.DATABASE_NAME || "lifetracker"

  const dbUser = "fonukogu";
  const dbPass = "postgres";
  const dbHost = "localhost";
  const dbPort = 5432;
  const dbName = "lifetracker";

  // if the DATABASE_URL, use that otherwise create the db
  // connection string ourselves
  return (
    process.env.DATABASE_URL ||
    `postgres://favour:wkHvbLNrKe8YRTeaFFxttPqiFQO8Y1TO@dpg-cikc5bdgkuvinfiiu470-a/lifetracker_oert`
  );
  // return process.env.DATABASE_URL ||`postgres://${dbUser}@${dbHost}:${dbPort}`
}

const BCRYPT_WORK_FACTOR = 13;

// console.log("process.env".yellow, Object.keys(process.env))
console.log("Life Tracker Config: ".blue);
console.log("Port: ".blue, PORT);
// console.log("SECRET KEY: ".blue, SECRET_KEY)
console.log("Database URI: ".blue, getDatabaseUri());
console.log("-----".blue);

module.exports = {
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
  SECRET_KEY,
};
