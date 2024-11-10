// Stack (primitive)and Heap(non primitive)
//stack--> u get a copy 
//heap--> changes into original value
let myNickname="Mitu"
let anotherName=myNickname
anotherName="Mita"
console.log(myNickname)
console.log(anotherName)

let user1={
    email:"user@gmail.com",
    upi: "user@ybl",
}

let user2= user1

user2.email="mita@gmail.com"//chnages are reflected in both

console.log(user1.email)
console.log(user2.email)