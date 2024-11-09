const accountId=14453
let accountEmail="mitali@gmail.com"
var accountPassword="12345"
accountCiy="Jaipur"

// accountId=2 not allowed
accountEmail="lala@gmail.com"
accountPassword="21212"
accountCiy="Bengaluru"

//so type safe that at times, u can declare any variable w/o defining the type
//bad practice though

let accountState; //undefined value

console.log(accountId);
//console.log(accountEmail);
//console.log(accountPassword);
//console.log(accountCiy);
console.table([accountId,accountEmail,accountPassword,accountCiy,accountState]);
/*
NOTE:
prefer not to use var, due to  block scope and functional scope
 */
// NOTE that ";" is optional