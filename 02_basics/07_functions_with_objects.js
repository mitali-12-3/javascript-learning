function calculateCartPrice1(...num1){//rest operator:pass multiple values
    return num1;
}
console.log(calculateCartPrice1(2))
console.log(calculateCartPrice1(200,400,500))//returns an array of these

function calculateCartPrice2(value1, value2,...num1){
    return num1;
}
console.log(calculateCartPrice2(200,400,500,2000))
//value1=200, value2=400, 500 and 2000 to rest operator and returned in num

const user={
    username:"Manny",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)
handleObject({
    username:"Cliff",
    price:299

})

const myNewArray=[200,400,100,600]
function returnArray(getArray){
    return getArray[2]
}
console.log(returnArray(myNewArray));
