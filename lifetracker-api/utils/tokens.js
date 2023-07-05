const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")

const generateToken = (data) => jwt.sign(data, SECRET_KEY, {expiresIn: "24h"})

// const validateToken = (token) => jwt.verify(token, SECRET_KEY)

// const testTokens = () => {
//     const user = {email: "person@gmail.com"}
//     const token = generateToken(user)
//     console.log("token:", token)
//     const validatedToken = validateToken(token)
//     console.log("validated token:", validatedToken)
// }


const validateToken = (token) => {
    try {
      const decoded = jwt.verify(token, SECRET_KEY)
      return decoded
    } catch (err) {
      return {}
    }
}

const createUserJwt = (user) => {
    validateFields({ required: ["id", "email"], obj: user, location: "token generation" })
  
    const payload = {
      id: user.id,
      email: user.email
    }
    return generateToken(payload)
}


module.exports = {
 generateToken,
 createUserJwt,
 validateToken
}

// testTokens()