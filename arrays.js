//Arrays are ordered, index-based collections used to store multiple values in a single
// variable.

//declaring an array
let fruits = ["apple", "banana", "cherry"];
// Accessing elements by index
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
// Modifying elements
fruits[1] = "orange"; // Change "banana" to "orange"
console.log(fruits); // ["apple", "orange", "cherry"]
// Adding elements
fruits.push("kiwi"); // Add "kiwi" to the end
console.log(fruits); // ["apple", "orange", "cherry", "kiwi"]
// Removing elements
fruits.pop(); // Remove the last element ("kiwi")
console.log(fruits); // ["apple", "orange", "cherry"]
// Array length
console.log(fruits.length); // 3
// Iterating through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Prints each fruit
}
// Array methods
fruits.push("grape"); // Add "grape" to the end
console.log(fruits); // ["apple", "orange", "cherry", "grape"]
fruits.unshift("mango"); // Add "mango" to the beginning
console.log(fruits); // ["mango", "apple", "orange", "cherry", "grape"]
fruits.splice(2, 1); // Remove "orange" (index 2)
console.log(fruits); // ["mango", "apple", "cherry", "grape"]
// Finding elements
let index = fruits.indexOf("cherry"); // Find index of "cherry"
console.log(index); // 2
// Checking if an element exists
let exists = fruits.includes("banana"); // Check if "banana" is in the array
console.log(exists); // false
// Converting an array to a string
let fruitString = fruits.join(", "); // Join elements into a string
console.log(fruitString); // "mango, apple, cherry, grape"
// Sorting an array
fruits.sort(); // Sort the array alphabetically
console.log(fruits); // ["apple", "cherry", "grape", "mango"]
// Reversing an array
fruits.reverse(); // Reverse the order of elements
console.log(fruits); // ["mango", "grape", "cherry", "apple"]
// Multi-dimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Accessing elements in a multi-dimensional array
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8
// Iterating through a multi-dimensional array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]); // Prints each element in the matrix
    }
}
// Assignments: Arrays
// 1. Create an array of your top 5 favorite movies. Log the first and last one.
let favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Shawshank Redemption", "Pulp Fiction"];
console.log("First movie:", favoriteMovies[0]); // "Inception"
console.log("Last movie:", favoriteMovies[favoriteMovies.length - 1]); // "Pulp Fiction"

// 2. Write a loop to print only even numbers from an array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    if (number % 2 === 0) {
        console.log("Even number:", number);
    }
}

// 3. Use map() to square all elements in a number array.
let numArray = [1, 2, 3, 4, 5];
let squaredArray = numArray.map(num => num * num);
console.log("Squared array:", squaredArray); // [1, 4, 9, 16, 25]

// 4. Use filter() to return only names longer than 4 characters.
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let longNames = names.filter(name => name.length > 4);
console.log("Names longer than 4 characters:", longNames); // ["Alice", "Charlie
// ", "David"]

// 5. Merge two arrays using spread and sort them alphabetically.
let array1 = ["banana", "apple", "cherry"];
let array2 = ["kiwi", "orange", "grape"];
let mergedArray = [...array1, ...array2];
mergedArray.sort();
console.log("Merged and sorted array:", mergedArray); // ["apple", "banana", "cherry", "grape", "kiwi", "orange"]


