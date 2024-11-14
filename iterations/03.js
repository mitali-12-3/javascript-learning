// for of loop

// ["","",""] strings in array
// [{},{},{}] objects in array
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num); 
}
const greetings="Hello World!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`); 
}
//Maps: key-value pairs, no duplicates
const map= new Map()
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")
map.set('NYC',"New York City")
console.log(map)

for (const [key, value] of map) {
    //console.log(key);
    console.log(value);   
}
// const myOb={
//     'game1':"NFS",
//     "game2":"COC"
// }
// for (const [key,value] of myOb) {
//     console.log(key,':-',value);//nooo, won't work
// }

