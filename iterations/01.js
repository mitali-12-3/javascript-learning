// //for loop

// for(let index= 0; index< 10; index++){
//     const element= index;
//     if(element==5)
//         console.log("5 is five");
//     console.log(element);
    
// }
// //console.log(element)//outta scope
// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop with value i= ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop with value i= ${i} and j= ${j}`);
//         console.log(`${i} * ${j}= ${i*j}`);
        
//     }
// }
// // const myArray= new Array("Flash","Batman","Ironman")
// const l= myArray.length
// console.log(`length is ${l}`)
// for(let index= 0; index<= l; index++){
//     const element= myArray[index];
//     console.log(element);
// }
//break and continue
for (let i = 1; i < 20; i++) {
    if(i==5){
        console.log(`5 detected`)
        continue;
    }
    console.log(`i value is ${i}`) 
}