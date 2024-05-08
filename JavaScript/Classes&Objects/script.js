// Prototypes in JS: 

//In short we can say prototype is like reference to an object.

// A JavaScript object is an entity having state and behavior (properties and methods).
//JS objects have a special property called prototype.
//We can set prototype using __proto__ (two underscores first and last)

//If object and prototype have same method, object's method will be used.

//This keyword : “This” keyword refers to an object that is executing the current piece of code. If the function being referenced is a regular function, “this” references the global object. The most common use of the this keyword is to eliminate the confusion between class attributes and parameters with the same name (because a class attribute is shadowed by a method or constructor parameter).

// Example -> Direct way of creating Object:
// const student = {
//     fullName : "Geetha Atkuri",
//     marks : 90.5,
//     printMarks :function() {
//         console.log("marks=", this.marks);
//     },
// };

// //Setting prototype example:
// const employee = {
//     calcTax() {
//         console.log("The tax rate is 10%");
//     },
// };

// const KaranArjun = {
//     salary = 50000;
// };

// KaranArjun.__proto__ = employee;



//Classes in JS
// class is a program code template for creating an objects. 
// Those objects will have some State(Variables) and behaviour(Functions) inside it. 

// syntax:
// class myClass{
//     constructor(){....}
//     myMethod(){....}
// }
// let myObj = new myClass();

//Constructor in JS
//constructor() method is : automatically invoked by new ; initializes Object 

//Example:
// class toyotaCar {
//     constructor(brand, mileage) {
//         console.log("Creating new objects");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

    // setBrand(brand){
    //     this.brandName = brand;
    // }
// }

//let fortuner = new toyotaCar("fortuner", 12); //Constructor is invoked
// fortuner.setBrand("fortuner");
//let lexus = new toyotaCar("lexus", 10);


//Inheritance in JS
//Inheritance is passing down properties & methods from parent class to child class.

//Syntax: 
// class Parent{

// }

// class child extends Parent {

// }

// If child and parent have save method then child's method will be used. [Method overriding].


//Example of Inheritance 
class Person{
    constructor(name) {
        // console.log("Enter parent constructor");
        this.species = "homo Sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }

    // sleep(){
    //     console.log("sleep");
    // }

    // work(){
    //     console.log("Do nothing"); // If child and parent have save method then child's method will be used. [Method overriding].
    // }
}

class engineer extends Person{
    constructor(name){
        // console.log("Enter child constructor");
        super(name); //To invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("solve problems, build something"); // If child and parent have save method then child's method will be used. [Method overriding].
    }
}

// class doctor extends Person{
//     work(){
//         console.log("Treat patients");
//     }
//}

let engObj = new engineer(Geetha);



//Super keyword -> The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//Syntax:
//super(args) //calls parent's constructor 
// super.parentMethod(args)