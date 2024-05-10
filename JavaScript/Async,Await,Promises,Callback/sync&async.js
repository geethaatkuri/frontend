console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("Hello");  
},4000); //timeout

console.log("Three");
console.log("Four");
//This is asynchronous as it doesn't wait until the 'hello' is printed. First all the four stmts will be executed simultaneously after four seconds 'hello' will be printed.
