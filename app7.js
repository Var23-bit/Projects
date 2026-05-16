const express = require("express")
const app = express()

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
]

app.get("/products/:id", function(req, res) {
    let id = req.params.id
    let product = products.find(function(p) {
        return p.id === parseInt(id)
    })

    if (product) {
        res.json(product)
    } else {
        res.json({ error: "Product not found" })
    }
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})