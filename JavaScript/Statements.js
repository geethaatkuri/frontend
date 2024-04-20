//if-else stmt
// const Age = 24;

// if(Age >= 20){
//     console.log("You are eligible to vote");
// } else{
//     console.log("You are not eligible to vote");
// }
// console.log("This statement will execute always");


//if-else-else-if-else stmt
const marks = 92;
if(marks > 90){
    console.log("A+");
} else if(marks > 80){
    console.log("A");
}else if(marks > 70){
    console.log("B+");
}else if(marks > 60){
    console.log("B");
}else {
    console.log("Need Improvement");
}
console.log("These are Assessment grade System.");


//Nested if-else stmt
const Age = 7;

if(Age >= 20){
    console.log("You are eligible to vote");
    if(Age >=70){
        console.log("You can vote twice");
    }
} else{
    console.log("You are not eligible to vote");
    if(Age < 10){
        console.log("You should go to School");
    }
}
console.log("This statement will execute always");


//Ternary Operator
const Marks = 50;
const Results = (Marks >= 45) ? "Passed" : "Failed";
console.log("Results:", Results);


//Switch-case Stmts
const grade = "E";

switch(grade){
    case "A":
        console.log('A->Very good');
        break;
    case "B":
        console.log('B->Good, Keep learning');
        break;
    case "C":
        console.log('C->Need Improvement');
        break;     
    case "D": case "E": //Multiple cases in switch stmt
        console.log('Poor');
        break;
    default :
    console.log("Invalid grade");        
}


//Loops in JS
//Loops are used to repeat a block of code.

//1. for loop
for (let index = 0; index < 5; index++) {
    console.log("GeethaAtkuri", index);
}
for (let indexx=0; indexx<7; indexx=indexx + 2) // indexx = indexx + 2 -> Jumps two times upto < 7
{
    console.log('Atkuri', indexx); 
}
//for (let index=1; index>0; index++){
    //console.log('Goes into infinite loop',index);
//}

//2. while loop --> First chcks the condition and does the execution
// let step = 0;
// while(step < 5)
// {
//     console.log("step", step);
//     step +=1;
// }

//3. do-while loop --> First executes and then chcks the condition
// let Step = 0;
// do {
//     console.log('Step', Step);
//     Step +=1;
// } while(Step < 5);

//4. Break and Continue
//Break --> Breaks the iteration
// let step = 0;
// while(step < 5)
// {
//     console.log("step", step);
//     step +=1;
//     if (step === 2) {
//         break;
//     }
// }

//Continue --> Skips the stmt condition and continues the iteration
let step = 0;
while(step < 5)
{
    step +=1;
    if (step === 2) {
        continue;
    }
    console.log("step", step);
}



