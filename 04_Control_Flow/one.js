// if(false){
//     //not executing
// }
// if(true){
//     //executing
// }
const isUser1Active= false
const taapmaan= 41//damn it's UP all over again

if(taapmaan<50){
    console.log("death due to heat");
}
if(isUser1Active){
    console.log(`Vella`);
}
else{
    console.log(`Bijy`);
}

/*
random stupid stuff:
<, >, <=,>=, ==< !=, ===, !==
===: strict data type check
!==: check for -ve sign
*/
const score=200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");
//implicit scope, use commas for multiple lines and use terminator at dee end
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
}
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}