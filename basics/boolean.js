// === is the equality operator
// !== not equal operator
// < less than operator
// > greater than operator
// <= less than or equal to operator
// >= greater than or equal to operator

let temp = 65
let isFreezing = temp <= 32
let isHot = temp >= 90
if (isFreezing) {
    console.log("Its so cold!")
} else if (isHot) {
    console.log("It's too hot!")
} else {
    console.log("It's such a pretty day")
}

if (temp >= 70 && temp <= 90) { 
    console.log('Get outside!')
} else {
console.log('Stay inside')
}