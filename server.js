const express = require("express");
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", {text777: "Word"})
})

// group all routes in their router files
// import the users router file
const userRouter = require('./routes/users')

// link up the routes from our users.js file
// linking a route to a particular path
app.use('/users', userRouter)

app.listen(3000);