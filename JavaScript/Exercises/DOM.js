let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from this course";

let divs = document.querySelectorAll(".box");
console.log(divs);
let idx = 1;
for(div of divs) {
    div.innerText = `New unique value ${idx}`;
    idx++; 
}
// div[0].innerText = "New unique value 1";
// div[1].innerText = "New unique value 2";
// div[2].innerText = "New unique value 3";
// console.dir(div);



//DOM Element object reference
// querySelector() -->Returns the first child element that matches a CSS selectors
// querySelectorAll() -->Returns all child elements that matches a CSS selectors
// accessKey -->Sets or returns the accesskey attribute of an element
// appendChild() -->Adds (appends) a new child node to an element
// contains()	-->Returns true if a node is a descendant of a node
// dir	-->Sets or returns the value of the dir attribute of an element
// firstChild	-->Returns the first child node of an element
// firstElementChild	-->Returns the first child element of an element
// getElementsByClassName()	-->Returns a collection of child elements with a given class name
// getElementsByTagName()	-->Returns a collection of child elements with a given tag name
// hasAttribute()	-->Returns true if an element has a given attribute
// hasAttributes()	-->Returns true if an element has any attributes
// hasChildNodes()	-->Returns true if an element has any child nodes
// id	-->Sets or returns the value of the id attribute of an element
// lang	-->Sets or returns the value of the lang attribute of an element
// lastChild	-->Returns the last child node of an element
// lastElementChild	-->Returns the last child element of an element
// nextSibling	-->Returns the next node at the same node tree level
// nextElementSibling	-->Returns the next element at the same node tree level
// outerHTML	-->Sets or returns the content of an element (including the start tag and the end tag)
// outerText	-->Sets or returns the outer text content of a node and its descendants
// ownerDocument	-->Returns the root element (document object) for an element
// parentNode	-->Returns the parent node of an element
// parentElement	-->Returns the parent element node of an element
// previousSibling	-->Returns the previous node at the same node tree level
// previousElementSibling	-->Returns the previous element at the same node tree level
// remove()	-->Removes an element from the DOM
// removeAttribute()	-->Removes an attribute from an element
// removeChild()	-->Removes a child node from an element
// replaceChild()	-->Replaces a child node in an element


//To insert elements
//node.append(el) --> adds at the end of the node(inside)
//node.prepend(el) -->adds at the start of the node(inside)
//node.before(el) -->adds before the node(outside)
//node.after(el) -->adds after the node(inside)


//To delete elements
//node.remove() -->removes the node
