const {Client} = require("pg") // importing client from db package (node postgres package)
const { getDatabaseUri } = require("./config")
require("colors")


// const db = new Client({connectionstring : getDatabaseUri()})

const db = new Client({
    user: "fonukogu",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "lifetracker"
})

db.connect((err) => {
    if (err) {
        console.error("connection.error".red, err.stack)
    } else {
        console.log("Successfully connected to postgres db!".blue)
    }
})

module.exports = db

// EXPLANATION OF ABOVE CODE
// Part 1: Connecting to the database

// We'll use the pg package to connect to the PostgreSQL database. We'll first create a db.js file and then use it to connect to the database.

// In the vaccine-registration-api directory, create a new file called db.js.
// Import the Client class from the pg package.
// Import the getDatabaseURI() function from the config.js file.
// Create a new Client instance using the getDatabaseURI() function.
// Establish a connection to the PostgreSQL database using the Client instance.
// If an error occurs, log the error to the terminal.
// If no error occurs, log a success message to the terminal.
// Export the connected Client instance from the db.js file.