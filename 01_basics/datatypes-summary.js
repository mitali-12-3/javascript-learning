/*************primitive data type

7 types: Number,Bigint,null,undefined,Symbol,Boolean,String

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)

const bigNumber= 322222222227888888888222n
console.log(typeof(bigNumber))

/*************reference(Non-Primitive)

their reference can be directly allocated into memory.

1.Object: Represents a collection of key-value pairs (properties and methods). 
Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). 
Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. 
Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.
*/
const heros=["spiderman","Ironman","Hulk"]

let obj={
    name:"Mitali",
    age:20,
}

const myfunc=function(){
    console.log("Hello World")
}
console.log(typeof myfunc) //function or object function

const hehe= undefined
console.log(typeof hehe) //undefined

const huhu= null
console.log(typeof huhu) //object
/*
Javascript dynamically typed or statically typed language?

Ans: JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
*/
const score=123.4
const mark= 100
const grade="A"
const active=false
const val= null
console.table(typeof(score)) //number