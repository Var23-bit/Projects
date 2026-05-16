const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("Welcome to my backend!")
})

app.get("/about", function(req, res) {
    res.send("I am Varun, a backend developer!")
})

app.get("/contact", function(req, res) {
    res.send("Contact me at varun@gmail.com")
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})