let payment = new Promise(function(resolve, reject) {
    let paymentSuccess = true

    setTimeout(function() {
        if (paymentSuccess) {
            resolve("Payment successful!")
        } else {
            reject("Payment failed - insufficient balance")
        }
    }, 2000)
})

console.log("Processing payment...")

payment
    .then(function(result) {
        console.log(result)
    })
    .catch(function(error) {
        console.log(error)
    })