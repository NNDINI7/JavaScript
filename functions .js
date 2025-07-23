//function 
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
function modulus(a, b) {
    return a % b;
}
function exponentiate(base, exponent) {
    return base ** exponent;
}
function squareRoot(number) {
    if (number < 0) {
        throw new Error("Cannot calculate square root of a negative number.");
    }
    return Math.sqrt(number);
}
function absoluteValue(number) {
    return Math.abs(number);
}
function round(number) {
    return Math.round(number);
}
function floor(number) {
    return Math.floor(number);
}
function ceil(number) {
    return Math.ceil(number);
}
function random(min, max) {
    return Math.random() * (max - min) + min;
}
console.log("Addition:", add(5, 3)); // 8
console.log("Subtraction:", subtract(5, 3)); // 2
console.log("Multiplication:", multiply(5, 3)); // 15
console.log("Division:", divide(5, 3)); // 1.666666666
console.log("Modulus:", modulus(5, 3)); // 2
console.log("Exponentiation:", exponentiate(5, 3)); // 125
console.log("Square Root:", squareRoot(25)); // 5
console.log("Absolute Value:", absoluteValue(-5)); // 5
console.log("Round:", round(5.7)); // 6
console.log("Floor:", floor(5.7)); // 5
console.log("Ceil:", ceil(5.1)); // 6
console.log("Random Number:", random(1, 10)); // Random number between 1

// 2. Arrow Functions Don’t Have Their Ow this
//Arrow functions lexically bind this — they inherit from their surrounding scope.
// This means they do not have their own this context, which can be useful in certain situations.
const person = {
    name: "Alice",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`); // 'this' refers to the person object
        }, 1000);
    }
};
person.greet(); // "Hello, my name is Alice" after 1 second

//arrow function caveats
// 1. Cannot be used as constructors
// Arrow functions cannot be used with the new keyword to create instances.
const Person = (name) => {
    this.name = name; // 'this' does not refer to the new instance
};
// const john = new Person("John"); // TypeError: Person is not a constructor
// 2. Cannot use arguments object
// Arrow functions do not have their own arguments object, so you cannot access the arguments passed to them using the arguments keyword.
const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
};
console.log("Sum:", sum(1, 2, 3, 4)); // 10

// 3. Cannot use with 'this' in object methods
// Arrow functions do not bind their own this, so they cannot be used as methods in objects
const calculator = {
    value: 0,
    add: (num) => {
        this.value += num; // 'this' does not refer to the calculator object
    }
};
// calculator.add(5); // TypeError: Cannot read properties of undefined (reading 'value')
// console.log(calculator.value); // 0, because 'this' is not bound to the calculator object

//lexical scope vs dynamic scope
// Lexical scope means that the scope of a variable is determined by its position in the source
// code, while dynamic scope means that the scope is determined by the call stack at runtime.
// In JavaScript, functions are lexically scoped, meaning that they can access variables from their enclosing scope.
// Dynamic scope is not supported in JavaScript, so all functions are lexically scoped.
// Example of lexical scope
function outerFunction() {
    let outerVariable = "I am outside!";
    
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }
    
    innerFunction(); // "I am outside!"
}
outerFunction();
// Example of dynamic scope (not applicable in JavaScript, but for illustration)
// In languages with dynamic scope, the inner function would access the variable based on the call stack
// rather than its lexical position. In JavaScript, this is not possible.
// Example of dynamic scope (not applicable in JavaScript, but for illustration)
function dynamicOuterFunction() {
    let dynamicOuterVariable = "I am dynamically scoped!";
    
    function dynamicInnerFunction() {    
        console.log(dynamicOuterVariable); // Would access dynamicOuterVariable based on call stack
    }
    dynamicInnerFunction(); // "I am dynamically scoped!" (if dynamic scope were supported)
}
dynamicOuterFunction(); 
// In JavaScript, this would not work as expected because it does not support dynamic scope.
//// In JavaScript, functions are always lexically scoped, meaning they can only access variables from their
// enclosing scope, not from the call stack at runtime.

//Assignments: Functions
//create an object with a method that logs its name property using both regular and arrow functions.
let obj = {
    name: "My Object",
    regularMethod: function() {
        console.log("Regular Method:", this.name);
    },
    arrowMethod: () => {
        console.log("Arrow Method:", this.name); // 'this' does not refer to obj
    }
};
obj.regularMethod(); // "Regular Method: My Object"
obj.arrowMethod(); // "Arrow Method: undefined" (because 'this' does not refer
// to obj in arrow functions)

//2. write a function that returns a closure that squares a number.
function createSquareFunction() {
    return function(num) {
        return num * num;
    };
}
const square = createSquareFunction();
console.log("Square of 5:", square(5)); // 25

//3.create a loop with var that prints 0 to 2 after 1 second - fix it using let.
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Using var:", i); // Will print 3 three times
    }, 1000);
}
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("Using let:", j); // Will print 0, 1, 2
    }, 1000);
}
