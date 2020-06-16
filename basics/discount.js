let age = 72

let isChild = age <= 13
let isSenior = age >= 55
let rate = 15

if (isChild) {
    rate = 5
} else if (isSenior) {
    rate = 10
}

console.log(rate)