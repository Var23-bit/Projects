const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("Welcome to my backend!")
})

app.get("/user", function(req, res) {
    res.json({
        name: "Varun",
        age: 18,
        city: "Bhopal",
        skills: ["C++", "Node.js", "Express"]
    })
})

app.get("/products", function(req, res) {
    res.json([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Headphones", price: 2000 }
    ])
})
app.get("/college", function(req, res) {
    res.json({
    name: "IES College of Technology",
    city: "Bhopal",
    course: "Computer Science",
    year: 2
  })
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})