//objects can be declared in 2 ways--literals and constructors
//singleton object(constrcutor): single instance
//literals: not singleton

//Object.create
//singleton via constructor 

const mySym= Symbol("key11")
//use symbol as a key

const JsUser={       //processed as
    name:"Mitali", // "name": "Mitali"
    age:20, //"age":20
    location: "Dehradun",
    "mySym":"mykey1",
    email:"fake@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
//console.log(typeof JsUser.mySym)// getting as string, not symbol

const JsUser2={       //processed as
    name:"Mitali", // "name": "Mitali"
    age:20, //"age":20
    location: "Dehradun",
    [mySym]:"mykey1",
    email:"fake@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"]
}
// console.log(JsUser2[mySym])
// console.log(typeof JsUser2[mySym])

JsUser2.email="mitali@gmail.com"
//console.log(JsUser2.email)
//Object.freeze(JsUser2)
JsUser2.email="pandey@gmail.com"
//console.log(JsUser2.email)//no updation
JsUser2.greetings=function(){
    console.log(`Hello JS user ${this.name}`)
}
JsUser2.greetings2=function(){
    console.log(`Hello JS user.`)
}
console.log(JsUser2.greetings())
console.log(JsUser2.greetings2())