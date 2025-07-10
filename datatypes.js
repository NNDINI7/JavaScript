// Dynamic Typing in JavaScript 
let v = 20;
typeof v; // "number"
v = "now i am a string";
typeof v; // "string"
console.log(typeof v); // "string"
console.log("hello world"); // "now i am a string"

//Datatypes
let n = "Hello"; // string
let age = 25; // number
let isActive = true; // boolean
let score; // undefined
let empty = null; // null
let big = 12345678901234567890n; // bigint
let unique = Symbol("id"); // symbol
console.log( n, age, isActive, score, empty, big, unique);

numbers = [100,200,300];
console.log(numbers.length);

// a for loop to iterates over indexes
for(let i=0; i <numbers.length ; i++){
    console.log(numbers[i]);
    numbers[i] += 100; // Increment each element by 100
}
    
// a for loop to iterate over collections
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// a for-in loop to iterate over dictionaries
const user= { name: "John", age: 30, isActive: true };
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// 1. Declare one variable of each primitive type and log their types.
var1 = 42; // number
var2 = "Hello"; // string
var3 = true; // boolean
 console.log(typeof var1); // "number"
    console.log(typeof var2); // "string"
    console.log(typeof var3); // "boolean"

// 2. Use typeof to check the type of null, NaN, and a function.
let nullValue = null;
let nanValue = NaN;
let func = function() { return "I am a function"; };
console.log(typeof nullValue); // "object"
// 3. Try changing a let variable from a number to a string.
let changeableVar = 10; // number
changeableVar = "now a string"; // changing to string
console.log(typeof changeableVar); // "string"
console.log(typeof nanValue); // "number"
console.log(typeof func); // "function"

// 4. Explain in comments why typeof null is "object".
// The typeof operator returns "object" for null because of a historical bug in JavaScript.
// This was due to the way values were represented in the early versions of JavaScript.
// It was intended to be a separate type, but it was mistakenly classified as an object.
// This is now a part of the language specification and cannot be changed without breaking existing code.
// The typeof operator is used to determine the type of a value in JavaScript.
// This is a known quirk in JavaScript, and it is important to be aware of it when checking types.
// The typeof operator is used to determine the type of a value in JavaScript.
// It is important to remember that null is a primitive value, but it is classified as an object due to this historical bug.
// This is a known quirk in JavaScript, and it is important to be aware of it when checking types.
// The typeof operator is used to determine the type of a value in JavaScript.

// 5. Create an object with at least 3 properties, then access one using dot notation.
let person = {
    name: "Alice",
    age: 28,
    isStudent: false
};
console.log(person.name); // Accessing property using dot notation

