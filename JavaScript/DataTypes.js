let a = 12;
// Boolean(a); // Output is -12
// a = a+1;
// console.log(a);

// a = '23'
// a = a+1
// console.log(a);
// a = 'GeethaAtkuri'

// a = false

// Type Conversions
// a= String(a);
a = Boolean(a); // Output is true. Since all the non-zero numbers are treated as true, and if True is converted to a number then the result is always 1 and "0 --> False".
console.log('The values of a is', a);
console.log('The type of a is',typeof(a));

// let b //if the variable is not initialised to any value then the variable is treated as 'undefined'.
// console.log('b is', b)

// let b = 'hello';
// b= Number(b);
// console.log('The value of b is',b);

// let b = null;
let b = undefined
b = Number(b);
console.log('b is', b); 
