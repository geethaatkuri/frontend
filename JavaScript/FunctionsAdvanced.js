//This keyword
const user = {
    username: 'Geetha',
    price: 1000,

    welcomeMessage: function() {
        console.log(`Hello ${this.username}, welcome to the website`);
    } 
}
user.welcomeMessage()


//Arrow function

const greet = (count) => {
    for(let i = 0; i < count; i++)
    console.log("Hello world");
};

greet(3);


const square = (num) => num * num;
console.log(square(3));

//Callback function

const calculate = (a,b, operation) => {
    return operation(a,b);
};


//Method-1
const addition = calculate(3,4, function (num1, num2){
    return num1 + num2;
})
console.log(addition);


//Method-2
const subtraction = (a,b) => a-b;

const subResult = calculate(8, 5, subtraction);

console.log(subResult);


//Method-3
function multiply(a,b){
    return a * b;
}

const mulResult = calculate(3,2, multiply);
console.log(mulResult);

