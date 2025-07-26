// OPERATORS
// 1. Arithmetic Operators
// +, -, *, /, %, ** (exponentiation)
// let sum = 5 + 3; // 8

// 2. Assignment Operators
// =, +=, -=, *=, /=, %=
// let x = 10;
// x += 5; // 15
 
// 3. Comparison Operators
// == (loose equality)
// === (strict equality)
// !=, !==, >, >=, <, <=

// 4. Logical Operators
// && (AND), || (OR), ! (NOT)

// 5. Ternary Operator
// let age = 18;
// let status = age >= 18 ? "Adult"; "Minor";

// 6. Nullish Coalescing??)
// Returns right-hand side only if the left-hand side is null or undefined.
// let username = null;
// let display = username ?? "Guest "// "Guest"

// 7. Optional Chaining(?.)
// Safely access deeply nested properties.
// let user = {};
// console.log(user.profile?.name); // undefined, doesn&#39;t throw error

// 8. Type Coercion in Operators
// console.log("5"+ 1); // &quot;51&quot;
// console.log("5"- 1); // 4
// console.log("5" * "2"); // 10


//  Assignments: Operators
// 1. Use arithmetic operators to calculate area of a circle.
var radius = 5;
var area = Math.PI * radius ** 2; // Area = π * r^2
console.log("Area of the circle:", area);
// 2. Write a ternary expression that checks if a number is even or odd.
var number = 10;
var isEven = number % 2 === 0 ? "Even" : "Odd";
console.log("The number is:", isEven);

// 3. Demonstrate use of ?? with null, undefined, and 0.
var value1 = null;
var value2 = undefined;
var value3 = 0;
var result1 = value1 ?? "Default Value";
var result2 = value2 ?? "Default Value";
var result3 = value3 ?? "Default Value";
console.log("Result with null:", result1); // "Default Value"
console.log("Result with undefined:", result2); // "Default Value"
console.log("Result with 0:", result3); // 0

// 4. Log the results of "5" + 5,"5" - 5, true + true.
console.log("5" + 5); // "55" (string concatenation)
console.log("5" - 5); // 0 (string to number conversion)
console.log(true + true); // 2 (boolean to number conversion)

// 5. Use optional chaining to safely access a nested object value.
let nestedObject = { a: { b: { c: 42 } } };
let value = nestedObject.a?.b?.c; // 42
console.log("Nested value:", value); // 42
