let foodOrder = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Food delivered!")
    }, 2000)
})

console.log("Order placed, going to watch TV...")

foodOrder.then(function(result) {
    console.log(result)
})

console.log("Watching TV...")