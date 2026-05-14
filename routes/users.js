const express = require("express");
const router = express.Router();

// call the Middleware function logger on the router
router.use(logger);

// These get executed top to bottom
// So make sure dynamic routes with "/:xxx" are at the bottom, otherwise unwanted paths may render
router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length -1}`)
    } else {
        console.log("Error");
        res.render('users/new', { firstName: req.body.firstName })
    }
});

// router.route() combines the three requests on the "/:id" route and cleans up the code a bit
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];

// function on our router called .param
// this function is going to run every time it finds the name of a param you pass in
// param is essentially a type of MIDDLEWARE !!!!
// MIDDLEWARE IN EXPRESS IS STUFF THAT RUNS BETWEEN THE REQUEST BEING SEND TO YOUR SERVER AND THE ACTUAL RESPONSE BEING RETURNED TO THE CLIENT
// so the params runs before router.route()...
router.param("id", (req, res, next, id) => {
  //set a variable req.user
  req.user = users[id];
  next();
});

// Middleware function logger
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
