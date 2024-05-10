const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     console.log(response); //JSON Format
//     let data = await response.json();
//     factPara.innerText = data[2].text;
// };

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    })
}


btn.addEventListener("click", getFacts);
