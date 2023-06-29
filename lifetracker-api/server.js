const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")
const authRoutes = require("./routes/auth")

const {BadRequestError, NotFoundError} = require("./utils/errors")

const app = express()
app.use(express.json())
app.use(cors())
// app.use(express.json())
app.use(morgan("tiny"))
app.use("/auth", authRoutes)
app.use((req, res, next) => {
    return next(new NotFoundError())
})
app.use((err, req, res, next) => {
    const status = err.status || 500 // should be 404?
    const message = err.message

    return res.status(status).json({
        error: {message, status}
    })
})

// const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

// set PORT in terminal with PORT=9999 nodemon server.js