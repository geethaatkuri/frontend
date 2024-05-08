// Prototypes in JS: 

//In short we can say prototype is like reference to an object.

// A JavaScript object is an entity having state and behavior (properties and methods).
//JS objects have a special property called prototype.
//We can set prototype using __proto__ (two underscores first and last)

//If object and prototype have same method, object's method will be used.

//This keyword : “This” keyword refers to an object that is executing the current piece of code. If the function being referenced is a regular function, “this” references the global object. The most common use of the this keyword is to eliminate the confusion between class attributes and parameters with the same name (because a class attribute is shadowed by a method or constructor parameter).

// Example -> Direct way of creating Object:
const student = {
    fullName : "Geetha Atkuri",
    marks : 90.5,
    printMarks :function() {
        console.log("marks=", this.marks);
    },
};

//Setting prototype example:
const employee = {
    calcTax() {
        console.log("The tax rate is 10%");
    },
};

const KaranArjun = {
    salary = 50000;
};

KaranArjun.__proto__ = employee;



//Classes in JS
// class is a program code template for creating an objects. 
// Those objects will have some State(Variables) and behaviour(Functions) inside it. 

// syntax:
// class myClass{
//     constructor(){....}
//     myMethod(){....}
// }
// let myObj = new myClass();

//Example:
class toyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new toyotaCar();
fortuner.setBrand("fortuner");
let lexus = new toyotaCar();

