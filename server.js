const express = require("express");
const app = express();

// Middleware that serves all the static files from our public folder
app.use(express.static("public"))
// use the urlencoded middleware
// this allows us to access information coming from forms
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

// group all routes in their router files
// import the users router file
const userRouter = require('./routes/users')

// link up the routes from our users.js file
// linking a route to a particular path
app.use('/users', userRouter)


app.listen(3000);