function sum(a, b){
    console.log(a + b);
}

function calculator (a, b, sumCallback){
sumCallback(a, b);
}

calculator(1, 2, sum); //Here sum is a function which is passed as an argument into calculator function. Here we should not pass the callbacks with paranthesis because it will not run. 

//other way to pass the function using arrow function as follows: -> It's like passing the complete function  
// calculator(1, 2, (a, b) => {
//     console.log(a+b);
// });

// const hello = () =>{
//     console.log("hello");
// }; 
// setTimeout(hello, 3000); //Async with callback

//Callback hell
// function getData(dataId, getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

//callback hell
getData(1, () => {
    console.log("Getting data 1...");
    getData(2, () => {
        console.log("Getting data 2...");
        getData(3, () => {
            console.log("Getting data 3...");
            getData(4);
        });
    });
});


