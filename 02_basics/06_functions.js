function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("M")
    console.log("A")
    console.log("N")
}
//sayMyName()
// function addTwoNumbers(number1, number2){//parameters don;t need datatype
//     console.log(number1 + number2)
// }
// addTwoNumbers(3,"a")//arguments

function addTwoNumbers(number1,number2){

    let result= number1+number2
   // console.log("hi")
    return result //after this line, code won't be executed like at all
    console.log("hi")//unreachable code detected
}
const result=addTwoNumbers(4,7)
//console.log("Result: ", result);

function logInUserMessage(username="Momo"){//Momo will print if no value is passed
    if(username===undefined){//runs for no arg passed
        console.log(`Please enter a username`);
        return
    }
    return `${username} just logged in`

}
//console.log(logInUserMessage("mitu")) //mitu just logged in
// console.log(logInUserMessage(""))//   just logged in
console.log(logInUserMessage())//undefined just logged in

