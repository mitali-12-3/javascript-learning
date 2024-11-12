// //this is used to access the current context, not the hard coded value
// const user={
//     username:"Mitu",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`Heyy ${this.username}! Welcome to website`);
//         //console.log(this)
//     }
// }
// // user.welcomeMessage()
// // user.username="Mitaa"
// // user.welcomeMessage()

// console.log(this)
// //node environment: {} empty
// //browser shows: window as window is the global object

// function chai(){
//     //let username="hitaa"
//     //console.log(this.username)
//     //undefined
//     console.log(this)
//     //lot of performance values and info
// }
// chai()

// const chai=function(){
//     let username="Mitali"
//     console.log(this.username);
//     //also gives undefined
// }
// chai()

//using arrow =>
// const chai=()=>{
//     let username="Mitali"
//     console.log(this);
//     //also gives undefined
// }
// chai()

const addTwo=(num1, num2)=>{
    return num1+ num2
}
//yes return in explicit 
console.log(addTwo(3,5))

//implicit return

const addThree=(num1, num2, num3)=> (num1+num2+num3)
//() no return 
console.log(addThree(1,2,3))

//return object
const returnOb= (num1,num2)=>({username:"Mita"})
console.log(returnOb(3,2))

const myA=[2,5,3,7,8]
// If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword : arrow
