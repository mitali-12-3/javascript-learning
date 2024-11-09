// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1);
console.log("02">1);
 
console.log(null>0) //empty
console.log(null==0) //null got converted to 0
console.log(null>=0) //null converted to 0

console.log(undefined>=0) //false
console.log(undefined==0) //false
console.log(undefined>0) //false

/***strict check */
console.log("2"===2) //diff data type, so false