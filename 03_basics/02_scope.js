function one(){
    const username="mitu"
    function two(){
        //nested function
        const website="youtube"
        console.log(username);//can access
    }
    //console.log(website);//can't
    two()    
}
//one()
if(true){
    const username="mita"
    if(username=="mita"){
        const website=" youtube"
        //console.log(username+website)
    }
    //console.log(website);
}
//console.log(username);


// ++++++Interesting++++++

//note that addone can be written here also:
console.log(addone(5))//no error
function addone(num){
    return num+1
}
console.log(addone(5))
//diff type of function creation

//addTwo can't be written before creation of addTWo since its contained in a variable which is created later on
//console.log(addTwo(5))//can;t
const addTwo= function(num){
    return num+2
}
console.log(addTwo(5))
//concept is called Hoisting