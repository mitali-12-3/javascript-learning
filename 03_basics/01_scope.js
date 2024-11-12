{
    //scope
}
var c1=50// var has global scope
if(true){
    let a1 =10
    const b1=20
     c1=30
}
var c1=100
//console.log(a1);//ReferenceError: a1 is not defined
//console.log(b1);
//ReferenceError: b1 is not defined at Object.<anonymous> 
console.log(c1); //runs fine
let a=500//let has block scope
if(true){
    let a=10
    const b=20
    console.log(a)//10
}
console.log(a)//500

//for loop. we take let
for(let i=0;i<Array.length;i++){
    const element=array[i]
}
//globe scope is diff for node and browser