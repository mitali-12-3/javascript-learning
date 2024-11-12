// // const t= new Object()
// // console.log(t);
// // //singleton object
// // const o= {}
// // console.log(o)
// // //non-singleton object

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Manny"
tinderUser.isLoggedIn=false
console.log(tinderUser)
const regularUser={
    email:"su,@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Mitali",
            lastname:"Pandey"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)
// console.log(regularUser.fullName?.userFullName.lastname)//? when API in use
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1, obj2}//don;t use
const obj3= Object.assign({},obj1,obj2,obj4)//{} is an optional parameter, so that every object value is returned in {}, not obj1
//console.log(obj3)

//now which is actually used: spread operator
const obj5={...obj1,...obj2}
//console.log(obj5)
//values from DB
const users=[
    {
    id:1,
    email:"h@hehe.com",
},
{

},
{
}
]
users[1].email
//console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); //[ '123abc', 'Manny', false ]
console.log(Object.entries(tinderUser));//[ 'id', '123abc' ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))