function isAdult(age) {
    if (age >= 18) {
        return "Yes, you can access this"
    } else {
        return "No, you are too young"
    }
}

console.log(isAdult(20))
console.log(isAdult(15))
console.log(isAdult(18))
