let isGuestOneVegan = true
let isGuestTwoVegan = false

//Are both vegan
if (isGuestOneVegan && isGuestTwoVegan){
    console.log('vegans only')
} 
//At least one vegan
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('at least one vegan')
} 
//None vegan
else {
    console.log('no vegans')
}
