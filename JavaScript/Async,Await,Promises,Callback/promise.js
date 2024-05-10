//Promises 
// let promise = new Promise((reslove, reject)=>{
//     console.log("I am a promise");
//     reject("Some error occured");
// });


// function getData(dataId, getNextData){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data", dataId);
//                 resolve("Success");
//                 if(getNextData){
//                     getNextData();
//                 }
//             }, 7000);
//         });   
//     }

const getPromise = () =>{
    return new Promise((resolve, reject) => {
        console.log("This is successPromise");
      //  resolve("Success");
      reject("Some network error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promised fulfilled", res);
});
promise.catch((err) => {
    console.log("Rejected", err);
});