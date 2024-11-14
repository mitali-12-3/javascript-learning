//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// function chai(){
//     console.log("DB connected");
// }
// chai();
(function chai(){
console.log(`DB connected`); 
})();
//always add ; after using one iife
/*
({function defintion})(function call)
iife execution
we use it in order to get rid of global scope's pollution
*/

(//named iife
    function coffee(){
        console.log(`DB yes`);  
    }
)();
//use semi colon

(//unnamed iife
    ()=>{
        console.log(`DB again yup`);  
    }
)();

(
    (name)=>{
        console.log(`DB again for ${name}`);  
    }
)('Mita');
