//Attributes
//getAttribute(attr) --> to get the attribute value
//setAttribute(attr, value) --> to set the attribute value 


//Style
//Node.style


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector('p');
//console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));

let div = document.querySelector("div");

//We can also style trheough JS in DOM as follows:
div.style.backgroundColor = "green";
div.style.fontSize = "20px";

div.innerText = "Hello!" // The difference between innerText and innerHTML is that innerText returns "all text contained by an element and all its child elements" and also text contnt can be changed. innerHTML returns "all text, including html tags, that is contained by an element."

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);
div.after(newBtn); 

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>This is DOM Manipulation Concepts!</i>";

document.querySelector("body").prepend(newHeading);