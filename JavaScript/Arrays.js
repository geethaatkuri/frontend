//Arrays --> An object that can store upto multiple data at once. Array is created using array literal []
//Array in Js can be mixed datatypes.
// const words = [
//     'Hello',
//     'World',
//     'Welcome', 
//     1, 
//     true, 
//     {
//         Name : 'Geetha',
//     }, 
//     function hello() {
//         console.log("Hello Wrold");
//     },
// ];
//console.log(words); //Prints the values inside array
//console.log(words[2]); //Accessing the value at 2th position using index
//console.log(words[70]); //undefined. Since there is no value and position of 70th in the array list
// console.log(words[5]);
//console.log(words.length);
// const newWords = words;
// newWords[6] = 'Hi';
// console.log(words);
// console.log(newWords);






const nums = [4, 1, 2, 8, 2, 8, 6];
console.log(nums.indexOf(8)); //at which postion num is present & prints the first position. If number is not present then returns -1
console.log(nums.includes(8));
//nums.push("Pushes the element at the end of array and gives the new length of array.")
//nums.unshift("Pushes the element into the starting of array i.e., in 0th index")
//nums.pop(); //removes last element from the array
//nums.shift(); //removes the first element
nums.sort();
const subArray = nums.slice(2,5);
console.log(subArray);
console.log(nums);


