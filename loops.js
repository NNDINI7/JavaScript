//Loops help you repeat actions—whether iterating over data or executing a block multiple
// times.
// The for loop is the most common type of loop in JavaScript. It consists of three parts:

//Example of a for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// This loop will print "Iteration: 0" to "Iteration: 4"

// The while loop continues as long as a condition is true.
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}
// This loop will print "Count: 0" to "Count: 4"

// The do-while loop executes at least once before checking the condition.
let num = 0;
do {
    console.log("Number:", num);
    num++;
}
while (num < 5);
// This loop will print "Number: 0" to "Number: 4"

// The for...of loop iterates over iterable objects like arrays.
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}
// This loop will print each fruit in the array

// The for...in loop iterates over the properties of an object.
let car = { make: "Toyota", model: "Camry", year: 2023 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
// This loop will print each property of the car object

// The break statement exits the loop immediately.
for (let j = 0; j < 5; j++) {
    if (j === 3) {
        break; // Exit the loop when j is 3
    }
    console.log("Break Example:", j);
}

// The continue statement skips the current iteration and moves to the next one.
for (let k = 0; k < 5; k++) {
    if (k === 2) {
        continue; // Skip the iteration when k is 2
    }
    console.log("Continue Example:", k);
}

//Assignments: Loops
// 1. Print numbers 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Create a multiplication table for 5 using a while loop.
let n = 5;
let multiplier = 1;
while (multiplier <= 10) {
    console.log(`${n} x ${multiplier} = ${n* multiplier}`);
    multiplier++;
}

// 3. Loop through an array using for...of and print each item.
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color:", color);
}

// 4. Loop through an object using for...in and print key: value pairs.
let student = { name: "John", age: 20, major: "Computer Science" };
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 5. Use nested loops to print a 3x3 grid of *.
let gridSize = 3;
for (let row = 0; row < gridSize; row++) {
    let rowOutput = "";
    for (let col = 0; col < gridSize; col++) {
        rowOutput += "* ";
    }
    console.log(rowOutput.trim()); // Print the row of stars
}
// 6. Use a break statement to exit a loop when a condition is met.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at i =", i);
        break; // Exit the loop when i is 5
    }
    console.log("Current i:", i);
}
// 7. Use a continue statement to skip an iteration when a condition is met.
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd number:", j);
}


