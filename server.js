const express = require("express");
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", {text777: "Word"})
})

app.listen(3000);