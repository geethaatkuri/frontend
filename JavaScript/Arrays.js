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
//console.log(words.length); //Finding length
//console.log(typeof words);
// const newWords = words;
// newWords[6] = 'Hi';
// console.log(words);
// console.log(newWords);


//Using for loop in array

let marks = [55, 66, 88, 98, 55, 78];
for (let i = 0; i < marks.length; i++) {
  // console.log(marks[i]);
}



//Array Methods

// let nums = [4, 1, 2, 8, 2, 8, 6];
// let B = nums.toString()//b is now a string
// console.log(B, typeof B);
// let C = nums.join("_") //joins all the array elements using a separator
// console.log(C, typeof C);
//console.log(nums.indexOf(8)); //at which postion num is present & prints the first position. If number is not present then returns -1
//console.log(nums.includes(8));

// let nums = [4, 1, 2, 8, 2, 8, 6];
// let nums_more = [11, 12, 13, 14];
// let newArray = nums.concat(nums_more)
// console.log(newArray);

// let r = nums.pop(); //removes last element from the array
// console.log(nums, r);
//nums.push("Pushes the element at the end of array and gives the new length of array.")
//nums.unshift("Pushes the element into the starting of array i.e., in 0th index")
//nums.shift(); //removes the first element
// nums.sort(); //Modifies the original array
// const subArray = nums.slice(2,5);
// console.log(subArray);
// console.log(nums);


//Splice and slice

//Splice can be used to add new items into the array
// let nums = [4, 1, 2, 8, 2, 8, 6, 7];
// nums.splice(2, 3, 1022, 1023, 1024) // 2--> position. 3-->from strting position number 2, 3 elements are removed. 1022,1023,1024-->these elements are placed in the removed elements.
// console.log(nums);

//Slice --> slices out a piece from an array. It creates new array.
// let newnums = nums.slice(3,7)
// console.log(newnums);




//Looping through arrays--> for loop, for-in, for-each, for-of

let nums = [4, 1, 2, 8, 2, 8, 6, 7];

// for(let i=0; i<nums.length;i++){
//   console.log(nums[i]);
// }

//forEach loop --> Performs operation on a existing array elements
nums.forEach((element)=> {
  // console.log(element*element);
})

//Array.from --> The HTML collection is converted into the array.
let name1 = "Geetha"
let arr = Array.from(name1)
// console.log(arr);

//for...of --> It's like a shortcut way to access array items
for(let item of nums){
  // console.log(item);
}

//for...in --> It is used to give keys(index position) of an array objects
for(let i in nums){
  // console.log(nums[i]);
}




//map(), filter(), reduce()


//map() --> It creates a new array by performing some operation on each array element.
let arr1 = [25, 09, 10]
//console.log(arr1);
let aa1 = arr1.map((value, index, array)=>{
  // console.log(value, index, array);
  // return value + 1
  return value + index
})
// console.log(aa1);

//filter() --> Filters an array with values that passes a test. 
let arr2 = [25, 09, 10, 04, 02, 07]
let aa2 = arr2.filter((A)=>{
  return A<10
})
// console.log(aa2);

//reduce() --> Reduces an array to a single value.
let arr3 = [1,2,3,2,4,3,5,6]
const reduce_func = ((p1 + p2) => {
  return p1 + p2
})
let newarr = arr3.reduce(reduce_func)
console.log(newarr);