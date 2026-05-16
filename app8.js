const express = require("express")
const app = express()

// middleware — runs on EVERY request
app.use(function(req, res, next) {
    console.log("New request received")
    console.log("Method:", req.method)
    console.log("URL:", req.url)
    console.log("-------------------")
    next()
})

app.get("/", function(req, res) {
    res.send("Home page")
})

app.get("/about", function(req, res) {
    res.send("About page")
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})