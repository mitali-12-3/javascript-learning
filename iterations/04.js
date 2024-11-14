const myObject={
    js:'JavaScript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by App'
}
// for in loop works fine for object
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// for in for arrays

const programming=["js","rb","py","java", "cpp"];
for(const key in programming){
    console.log(programming[key]);
    //array has keys as numbers starting from 0 as default, its an object
}
//MAP IS NOT EXACTLY ITERATABLE:

const map= new Map()
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")
map.set('NYC',"New York City")

for (const key in map) {
    console.log(key);
}