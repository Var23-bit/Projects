const express = require("express")
const app = express()

app.use(express.json())

let products = [
    { id: 1, products: "laptop", prices: 70000 },
    { id: 2, products: "mobile", prices: 25000 },
    { id: 3, products: "tablet", prices: 35000}
]

// GET all products
app.get("/products", function(req, res) {
    res.json(products)
})

// GET single product
app.get("/products/:id", function(req, res) {
    let product = products.find(function(p) {
        return p.id === parseInt(req.params.id)
    })
    if (product) {
        res.json(product)
    } else {
        res.json({ error: "Product not found" })
    }
})

// POST - add product
app.post("/products", function(req, res) {
    let newProduct = req.body
    newProduct.id = products.length + 1
    products.push(newProduct)
    res.json({ message: "Product added!", product: newProduct })
})

// PUT - update product
app.put("/products/:id", function(req, res) {
    let product = products.find(function(p) {
        return p.id === parseInt(req.params.id)
    })
    if (product) {
        product.products = req.body.products || product.products
        product.prices = req.body.prices || product.prices
        res.json({ message: "Product updated!", product: product })
    } else {
        res.json({ error: "Product not found" })
    }
})

// DELETE - remove product
app.delete("/products/:id", function(req, res) {
    let index = products.findIndex(function(p) {
        return p.id === parseInt(req.params.id)
    })
    if (index !== -1) {
        products.splice(index, 1)
        res.json({ message: "Product deleted!" })
    } else {
        res.json({ error: "Product not found" })
    }
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})