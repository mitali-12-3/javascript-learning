/*
JAVASCRIPT EXECUTION CONTEXT: by execution context we mean, how the file created by the user actually runs

In every Javascript code, first a Global EU is formed which is referred by a variable 'this'

browser EC: window object
nodeJS EC: diff

javascript: single threaded, everything's a process

two main types of Eexecution Context:

1. Global EU
2. Function/Functional EU
3. also, in Mongoose, there is, Eval EU


A code has certain phases:

1. Memory Creation Phase
--mere m/m allocation of variables n all

2. Execution Phase
--arithmetic n all stuff

eg:

let val1= 10
let val2=5
function addNum(num1, num2){
    let total= num1+ num2
    return total
}
let result1= addNum(val1, val2)



Step 1. Global Execution
 - executed to this
Step 2. Memory Phase
- val1 -> undefined
- val2 -> undefined
- addNum -> function definition
- result1 -> undefined


Step3. Execution Phase
 val1 <- 10
 val2 <- 5
 addNum -> 
 /////// Makes new EC which has new variable environment and execution thread 
 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 Step1. Memory Phase

 val1 ->undefined 
 val2 ->undefined
 total ->undefined

 Step2. Execution Phase
 val1 <- 10
 val2 <- 5
 total <- 15
 // now this total goes to Global EU and this function's EC is deleted

 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 result1 <- 15
 

*/
//LIFO for call stack