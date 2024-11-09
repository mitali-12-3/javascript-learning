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

/*********************OPERATIONS******************/
let v=3
let negv=-v
console.log(negv)

console.log(29+2)
console.log(12-2)
console.log(2*10)
console.log(2/2)
console.log(2**3)
console.log(2%2)

let str1="Hello"
let str2=" World"
let str3=str1+str2
console.log(str3)

console.log("1"+2) //12
console.log("1"+"2") //12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2")//32

console.log(+true)
//console.log(true+) error
console.log(+"")

let num1, num2, num3 
num1= num2= num3= 2+2 //stewpid

let gameCounter=100
++gameCounter;
console.log(gameCounter)
gameCounter++;
console.log(gameCounter)
