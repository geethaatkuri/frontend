//This keyword
// const user = {
//     username: 'Geetha',
//     price: 1000,

//     welcomeMessage: function() {
//         console.log(`Hello ${this.username}, welcome to the website`);
//     } 
// }
// user.welcomeMessage()


// //Arrow function

// const greet = (count) => {
//     for(let i = 0; i < count; i++)
//     console.log("Hello world");
// };

// greet(3);


// const square = (num) => num * num;
// console.log(square(3));

// //Callback function

// const calculate = (a,b, operation) => {
//     return operation(a,b);
// };


// //Method-1
// const addition = calculate(3,4, function (num1, num2){
//     return num1 + num2;
// })
// console.log(addition);


// //Method-2
// const subtraction = (a,b) => a-b;

// const subResult = calculate(8, 5, subtraction);

// console.log(subResult);


// //Method-3
// function multiply(a,b){
//     return a * b;
// }

// const mulResult = calculate(3,2, multiply);
// console.log(mulResult);


//setTimeout function
// console.log('Hello');
// console.log('World');
// setTimeout(function(){
//     console.log("This will execute 4 secs later");
// }, 4000);
// console.log("Four Seconds");
// console.log("Time has been set");


//Making pizza using callback function example.
function getCheese(callback) {
    setTimeout(() =>{
        const cheese = "🧀";
        console.log("Here is the cheese ", cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout( () => {
        const dough = cheese + '🍥';
        console.log('Here is the dough', dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout( () => {
        const pizza = dough + '🍕';
        console.log('Here is the pizza', pizza);
        callback(pizza);
    }, 2000);
}

// console.log(getCheese());
getCheese((cheese) => {
    // console.log("Got the cheese", cheese);
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("Got my pizza", pizza);
        });
        // console.log("Got my dough", dough);
    });
});



//Array Callback Function
// const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];
//const firstNeg = (num) => {
  //  return num < 0;
//}

//const result = a.find(firstNeg);
//const result = a.findIndex(firstNeg);

//console.log(result);

// a.forEach((num, i) => {
//     console.log('array num', num, i);
// });



//Write a function prgm to find mean of 5 numbers.
const mean = (a,b,c,d) => {
    return (a+ b+ c+ d) / 4 
}
console.log(mean(4, 5, 6, 7));