// Write a JS program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guesses are correct, greater or lesser than the original number.
// 100 - (no.of guesses) is the score of the user. 
// The program is expected to terminate once the number is guessed. The number should be in between 1 to 100.


//Code
let  a = Math.random() * 100;
a = Number.parseInt(a)
let input;
let score = 100;

while(input != a) {
    score = score - 1;
    input = prompt("Enter the number: ");
    if (input == a){
        console.log("Congratulations! Your guess is correct.");
        console.log(`You have guessed the actual number in ${100-score} chances.`);
    }
    else if(input > a && input < 100){
        console.log("The number you have guessed is greater than the actual number.");
    }
    else if(input < a && input > 0){
        console.log("The number you have guessed is less than the actual number.");
    }
    else{
        console.log("Enter the number between 1 to 100");
    }
}