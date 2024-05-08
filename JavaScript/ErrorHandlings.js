// try {
//     const res = prompt('Are you a robot?');
//     if(res === 'Y'){
//         throw new Error('Robot Found')
//     }
// } catch (error) {
//     console.log(error.name, error.message);
// } finally{

// }


  try {
    console.log("Before the error");
    const age = 12;
    console.log(age);
    console.log("After the error");
} catch (err) {
    console.log(err.name); //err.name -> error name 
    console.log(err.message); //err.message -> error's message
} finally{
    console.log("From finally");
}

const a = 2 * 4 ;
console.log("Remaining code is being executed after the try-catch block:", a);


//When any error occurs in the code the execution stops at that particular line, so to overcome this problem we use error handlings.
//Error handling -> Error handling is the process of handling the possibility of failure.

//It allows to wrap potentially problematic code within a “try” block and specify the course of action in a “catch” block should any errors occur.

//The try statement allows you to define a block of code to be tested for errors while it is being executed.
//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
//syntax:
// try{
//     ...normal code
// } catch(err){ //err is error object
//     ...handling error
// }


// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).
// The exception can be a JavaScript String, a Number, a Boolean or an Object:

// throw "Too big";    // throw a text
// throw 500;          // throw a number
// If you use throw together with try and catch, you can control program flow and generate custom error messages.


// The finally statement lets you execute code, after try and catch, regardless of the result:
// Syntax:
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// finally {
//   Block of code to be executed regardless of the try / catch result
// }
