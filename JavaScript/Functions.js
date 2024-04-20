function addTwoNumbers(number1, number2){
    // let Result = (number1 + number2);
    // return Result
    return number1 + number2;
}
const Result = addTwoNumbers(3, 4)
// console.log('Result:', Result);

function LoginUserMessage(username='Sam'){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just looged in`
}
// console.log(LoginUserMessage("Geetha"))
// console.log(LoginUserMessage(""));//empty string
// console.log(LoginUserMessage());//No string


//Function with objects and arrays

//A rest operator is a type of parameter that gets all of the remaining parameters of a function call via an Array. It enables us to handle a variety of inputs as parameters in a function. Because it is used to combine many items, the rest operator is very helpful during array and object destructuring. It is represented by three dots (...)

// function CalculateCartPrice(...num1){
    // return num1
// }

// console.log(CalculateCartPrice(200, 500, 200, 2000))


//Handling objects in functions
const user = {
    username: "Geetha",
    prices: 5000
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "Sammy",
    price: 50000
})


//Handling arrays in functions

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 5000]));



//Global scope & Block scope in functions

let p = 300;
if(true){
    let p = 30;
    const q = 20;
    // console.log("INNER:", p); //block scope. Since inside printing inside the if block.
}

//console.log(p); //Global scope. Since printing outside the if block.

//Nested Scope in functions

function one(){
    const uname = 'GeethaAtkuri';
    
    function two(){
        const website = "Youtube"
        // console.log(uname);
    }
    //console.log(website);

    two()

}

//one()

if (true){
    const Uname = "Atkuri";
    if (Uname === "Atkuri") {
        const Website = "Youtube";
        // console.log(Uname + Website);
    }
    // console.log(Website);
}
// console.log(Uname);


//Mini Hoisting

console.log(addone(5))

function addone(num){
    return num + 1

}


const addTwo = function (num){
    return num + 2
}

addTwo(5)


const square = function (num){
    return num * num ;
};

console.log(square);
console.log(square(7));


//Nested functions

function addSquares(a,b) {
    const sa = square(a);
    const sb = square(b);

    function square(num){
        return num * num;
    }

    return sa + sb;
}

console.log(addSquares(3,4));

