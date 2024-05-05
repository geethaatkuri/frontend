//Handling events through JS

//Node.event = () =>{      --> Here .event represents onclick, ondblclick,....
    //handle here
//}


//Handling button btn1:
let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    let a = 5;
    a++;
    console.log(a);//6
    // console.log("Button is clicked!");
};


//Handling div:
let div = document.querySelector("div");
div.onmouseover = ()=>{
    console.log("You are inside the div");
};

//Handling button btn2:
// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () =>{
//     console.log("Double clicked 2 times!");
// };



//Event Object
// It is a special object that has details about event.
// All event handlers have access to the event Object's properties and methods.

//Syntax :
// Node.event = (e) =>{
//     handle here
// }

//Example : e.target, e.type, e.clientX, e.clientY

//Handling button btn2 with event object:
let btn2 = document.querySelector("#btn2");
btn2.ondblclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};


//Event Listeners  --> An event listener is a function in JavaScript that waits for an event to occur then responds to it.

//Syntax:
// Node.addEventListener(event, callback)

// Node.removeEventListener(event, callback)

// Note: the callback refernece should be same to remove.

btn1.addEventListener("click", (evt)=>{
    console.log("Button1 was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("click", ()=>{
    console.log("Button1 was clicked-handler2");
});


const handler3 = () =>{
    console.log("Button1 was clicked-handler3");
};


btn1.addEventListener("click", ()=>{
    console.log("Button1 was clicked-handler4");
});

btn1.removeEventListener("click", handler3);


let modeBtn = document.querySelector("#mode");
let currMode = "light"; //thrn change to dark

modeBtn.addEventListener("click", ()=>{
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});