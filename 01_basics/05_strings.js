const name="Mitali "
const repoCount= 12
console.log(name+repoCount+ " Value" )

/*
1. don't use "+" it poor
2. use back ticks ``, method called string interpolation
*/

console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);

//using objects while declaration
const gameName = new String('subwayCutieSurfers')
console.log(gameName) //[String: 'subwayCutieSurfers']
console.log(gameName[0]) //s
console.log(gameName.__proto__)//{}
console.log(gameName.length) //18
console.log(gameName.toLowerCase()) //subwaycutiesurfers
console.log(gameName.toUpperCase()) //SUBWAYCUTIESURFERS
console.log(gameName.charAt(2)) //b
console.log(gameName.indexOf('t'))//8

const word= new String('mitali-mp')
const newStr= word.substring(0,5) //5 excluded, ignores -ve values
console.log(newStr) //mital

const anotherString= word.slice(-8,4)
console.log(anotherString)

const newStr1="  after  "
console.log(newStr1);
console.log(newStr1.trim()); //for whitespaces and new line terminators

const url= "https://linkedin.com/mitali%20pandey"

console.log(url.replace('%20','-'));// https://linkedin.com/mitali-pandey
console.log(url.includes('cutie'))

//converting string into an array based on - separation
const example="mitali-uk-ddn"
console.log(example.split('-')); //[ 'mitali', 'uk', 'ddn' ]

