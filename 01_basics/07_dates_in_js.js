//arbitrary date:1 January 1970,UTC---> Calculated in milliseconds
// other than that, we have this api
let myDate= new Date()
console.log(myDate);//2024-11-10T08:09:43.371Z

console.log(myDate.toString());
//Sun Nov 10 2024 08:11:03 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Sun Nov 10 2024
console.log(myDate.toISOString())//2024-11-10T08:13:53.194Z
console.log(myDate.toJSON())//2024-11-10T08:13:53.194Z
console.log(myDate.toLocaleDateString())//11/10/2024
console.log(myDate.toLocaleString())//11/10/2024, 8:13:53 AM
console.log(myDate.toLocaleTimeString())//8:13:53 AM

console.log(myDate.toTimeString())
//08:13:53 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString())//Sun, 10 Nov 2024 08:13:53 GMT

console.log(typeof myDate); //object

let createDate=new Date(2023,0,23) //month starts with 0 in JavaScript
//0 is January
console.log(createDate.toDateString());
console.log(createDate.toLocaleString());

let newDate=new Date("2024-11-14")//YYYY-MM-DD
console.log(newDate.toLocaleString());

let newDate2=new Date("10-11-2024")//MM-DD-YYYY
console.log(newDate2.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(newDate2.getTime());
console.log(Math.floor(Date.now()/1000))
//polls and quizes projects

console.log(newDate.getMonth()+1)//10-11-2024
console.log(`${newDate.getDay()}`)

console.log(newDate2.toLocaleString('default',{
    weekday:'long'
}))