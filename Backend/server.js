//initializing the server by calling node and other dependencies:
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

//bringing routes

const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')

//app

const app = express()

//connecting Database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => console.log("database Connected"))

//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//cors: where data need to be correct authenticate or not: which will decided by cors
if (process.env.NODE_ENV = 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

//routes middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)


//routes

//port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is Running at ${port}`)
})