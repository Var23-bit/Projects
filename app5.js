function checkLogin(password) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (password === "varun123") {
                resolve("Login successful! Welcome Varun")
            } else {
                reject("Wrong password!")
            }
        }, 1000)
    })
}

async function startApp() {
    try {
        let result = await checkLogin("varun123")
        console.log(result)
    } catch(error) {
        console.log("Error:", error)
    }
}

startApp()