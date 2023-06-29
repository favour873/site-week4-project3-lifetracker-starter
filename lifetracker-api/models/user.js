const bcrypt = require("bcrypt")
const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config")
const {BadRequestError, UnauthorizedError} = require("../utils/errors")

class User {
    // static async MakePublicUser(user) {
    //     return {
    //         id : user.id,
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         email: user.email,
    //         location: user.location,
    //         date: user.date
    //     }
    // }
    // static async login(credentials) {
    //     // user should submit their email and password
    //     // if any of these fields are missing, throw an error
    //     const requiredFields = ["email", "password"]
    //     // console.log(requiredFields)
    //     requiredFields.forEach((field) => {
    //         // console.log(requiredFields)
    //         // !credentials.hasOwnProperty(field)
    //         // if (!(field in credentials)) {
    //         if (!credentials.hasOwnProperty(field)) {
    //             throw new BadRequestError(`Missing ${field} in request body.`)
    //         }
    //     })
    //     // lookup the user in the db by email
    //     const user = await User.fetchUserByEmail(credentials.email)
    //     // if a user is found, compare the submitted password
    //     // with the password in the db
    //     // if there is a match, return the user
    //     if (user) {
    //         const isValid = await bcrypt.compare(credentials.password, user.password)
    //         if (isValid) {
    //             return user.MakePublicUser(user)
    //         }
    //     }
    //     // if any of this goes wrong, throw an error
    //     throw new UnauthorizedError("Invalid email/password combo")
    // }

    // static async register(credentials) {
    //     // user should submit their email, password, rsvp status, and number of guests
    //     // if any of these fields are missing, throw an error
    //     const requiredFields = ["firstName", "lastName", "email", "password", "location"]
    //     // console.log(requiredFields)
    //     requiredFields.forEach((field) => {
    //         // console.log(requiredFields)
    //         // if (!(field in credentials)) {
    //         if (!credentials.hasOwnProperty(field)) {
    //             throw new BadRequestError(`Missing ${field} in request body.`)
    //         }
    //     })

    //     if (credentials.email.indexOf("@") <= 0) {
    //         throw new BadRequestError("Invalid email.")
    //     }
    //     // make sure no user already exists in the system with that email
    //     // if one does, thorw an error
    //     const existingUser = await User.fetchUserByEmail(credentials.email)
    //     if (existingUser) {
    //         throw new BadRequestError(`Duplicate email: ${credentials.email}`)
    //     }

    //     // take the users password, and hash it
    //     const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
    //     // take the users email and lowercase it
    //     // 
    //     const lowercasedEmail = credentials.email.toLowerCase()

    //     // create a new user in the db with all their info
    //     const result = db.query(`
    //         INSERT INTO users (
    //             first_name,
    //             last_name,
    //             email,
    //             password,
    //             location,
    //         )
    //         VALUES ($1, $2, $3, $4, $5)
    //         RETURNING id, firstName, lastName, email, location, date:
    //     `, [credentials.firstName, credentials.lastName, lowercasedEmail, hashedPassword, credentials.location])
    //     // return the user
    //     const user = result.rows[0]
    //     return user.MakePublicUser(user)
    // }

    // static async fetchUserByEmail(email) {
    //     // fetch user by email method using query
    //     if (!email) {
    //         throw new BadRequestError("No email provided")
    //     }

    //     const query = `Select * FROM users WHERE email = $1`
    //     const result = await db.query(query, [email.toLowerCase()])
    //     const user = result.rows[0]
    //     return user
    // }
}

module.exports = User