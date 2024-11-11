const arr1=["apple","mango","grapes"]
const arr2=["pasta","macroni","chowmein"]
//arr1.push(arr2);//takes array as a data with further elements
//console.log(arr1);
//this way we get an array inside array, which we don't want
//console.log(arr1[3])
const arr3= arr1.concat(arr2)
console.log(arr3)
//[ 'apple', 'mango', 'grapes', 'pasta', 'macroni', 'chowmein' ]

//spread operator...
const allFood=[...arr1,...arr2]
console.log(allFood)

const anotherA=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_anotherA=anotherA.flat(Infinity)
console.log(usable_anotherA)//spread out values

//USED IN WEB SCRAPPING
console.log(Array.isArray("Apples"))
console.log(Array.from("Apples"))

console.log(Array.from({name:"Apples"}))
//interesting for interview perspective

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))