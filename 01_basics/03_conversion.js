let score="33abc" //string
console.log(typeof(score))

let ValueInNumber=Number(score)
console.log(typeof(ValueInNumber)) //number
console.log(ValueInNumber) //Nan

let check=null//object
let ValueInNumber2=Number(check)
console.log(ValueInNumber2) //0

let m=undefined //undefined
let ValueInNumber3=Number(m)
console.log(ValueInNumber3)//Nan

let checking=true //boolean
let ValueInNumber4=Number(checking)
console.log(ValueInNumber4) //1 for true

let yo="baby" //string
let vc=Number(yo)
console.log(vc) //Nan

let isLoggedIn="mine"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNum=3
let stringNum= String(someNum)
console.log( typeof stringNum);