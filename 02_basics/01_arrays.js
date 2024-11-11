//collection of multiple items under single variable is an array in javascript
const myarr=[0,1,2,3,4,5]
console.log(typeof myarr);//object
//javscript arrays are resizable
//shallow copies are created
// const myarr2=["dsa","daa"]
// const myarr3=new Array(2,4,7,8)
// myarr.push(2);
// myarr.push(3);
// console.log(myarr)
// myarr.pop()
// console.log(myarr)
// myarr.unshift(9)//bekaar since this overloaads the device
// console.log(myarr)
// myarr.shift()
// console.log(myarr)
// /*[
//     0, 1, 2, 3,
//     4, 5, 2
//   ]*/
// console.log(myarr.includes(5))
// console.log(myarr.indexOf(5))//-1 if does'nt exists
// const newA = myarr.join()//this binds the array and also changes the datatype into string
// console.log(newA)//0,1,2,3,4,5,2 not in brackets
// console.log(typeof newA)//string

//slice and splice

console.log("A",myarr)
const myn1= myarr.slice(1,3)

console.log(myn1)//1,2
console.log("B",myarr)

const myn2= myarr.splice(1,3)//manipulates original array
console.log("C",myarr)//0 4 5
console.log(myn2)