//Strings: Strings are sequences of characters used to store and manipulate text. 
// JavaScript provides powerful methods to work with them.

//create a string
let greeting = "Hello, World!";
// Accessing characters by index
console.log(greeting[0]); // "H"
console.log(greeting[7]); // "W"
console.log(greeting[12]); // "!"
// Modifying a string (strings are immutable, so we create a new string)
greeting = greeting.replace("World", "JavaScript"); // Replace "World" with "JavaScript"
console.log(greeting); // "Hello, JavaScript!"
// String length
console.log(greeting.length); // 20
// String methods
console.log(greeting.toUpperCase()); // "HELLO, JAVASCRIPT!"
console.log(greeting.toLowerCase()); // "hello, javascript!"
console.log(greeting.indexOf("JavaScript")); // 7 (index of "JavaScript")
console.log(greeting.includes("Hello")); // true (check if "Hello" is in the string)
console.log(greeting.split(", ")); // ["Hello", "JavaScript!"] (split
// the string into an array)
console.log(greeting.startsWith("Hello")); // true (check if it starts with "Hello")
console.log(greeting.endsWith("!")); // true (check if it ends with "!")
// String concatenation
let name = "Alice";
let welcomeMessage = greeting + " My name is " + name + "."; // Concatenate strings
console.log(welcomeMessage); // "Hello, JavaScript! My name is Alice."
// Template literals (ES6 feature)
let age = 30;
let templateMessage = `Hello, ${name}! You are ${age} years old.`; // Using template literals
console.log(templateMessage); // "Hello, Alice! You are 30 years old."
// Multi-line strings using template literals
let multiLineString = `This is a multi-line string.
It can span multiple lines without using escape characters.`;
console.log(multiLineString);
// String interpolation
let item = "book";
let price = 19.99;
let itemMessage = `The price of the ${item} is $${price}.`; // Using template literals for interpolation
console.log(itemMessage); // "The price of the book is $19.99."
// String comparison
let str1 = "apple";
let str2 = "banana";
console.log(str1 < str2); // true (compares lexicographically)
// String trimming
let spacedString = "   Hello, World!   ";
console.log(spacedString.trim()); // "Hello, World!" (removes leading and trailing spaces)
// String escaping
let escapedString = "He said, \"Hello!\""; // Using backslashes to escape
console.log(escapedString); // He said, "Hello!"
// String searching
let searchString = "The quick brown fox jumps over the lazy dog.";
console.log(searchString.search("fox")); // 16 (index of "fox")
console.log(searchString.match(/the/gi)); // ["the", "the"] (case-insensitive search for "the")
// String slicing
let slicedString = searchString.slice(4, 9); // Extracts "quick" from the string
console.log(slicedString); // "quick"
// String padding
let paddedString = "5".padStart(3, "0"); // Pads the string with zeros to a length of 3
console.log(paddedString); // "005"
// String replacing
let replacedString = searchString.replace("lazy", "active"); // Replaces "lazy" with "active"
console.log(replacedString); // "The quick brown fox jumps over the active dog."
// String repeating
let repeatedString = "Hello! ".repeat(3); // Repeats the string
console.log(repeatedString); // "Hello! Hello! Hello! "
// String escaping with backticks
let backtick
EscapedString = `He said, "Hello!"`; // Using backticks for string literals
console.log(backtickEscapedString); // He said, "Hello!"
// String conversion
let numString = String(123); // Convert number to string
console.log(numString); // "123"
// String to number conversion
let parsedNumber = Number("456"); // Convert string to number
console.log(parsedNumber); // 456
// String to boolean conversion
let boolString = String(true); // Convert boolean to string
console.log(boolString); // "true"

//Assignments: Strings
// 1. Create a string and print its first and last characters.
let myString = "JavaScript is awesome!";
console.log("First character:", myString[0]); // "J"
console.log("Last character:", myString[myString.length - 1]); // "!"

// 2. Write a function to count how many times a word appears in a sentence.
function countWord(sentence, word) {
    let wordsArray = sentence.toLowerCase().split(" ");
    return wordsArray.filter(w => w === word.toLowerCase()).length;
}
let sentence = "JavaScript is great. JavaScript is versatile. I love JavaScript.";
let wordToCount = "JavaScript";
console.log(`The word "${wordToCount}" appears ${countWord(sentence, wordToCount)} times in the sentence.`);

// 3. Create a string and check if it contains a specific substring.
let checkString = "Learning JavaScript is fun!";
let substringToCheck = "JavaScript";
console.log(`Does the string contain "${substringToCheck}"?`, checkString.includes(substringToCheck)); // true
// 4. Use a string method to convert a sentence to uppercase.
let sentenceToUpper = "this is a test sentence.";
console.log("Uppercase sentence:", sentenceToUpper.toUpperCase()); // "THIS IS A

// 5. Write a program that reverses a string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
let originalString = "Hello, World!";
console.log("Reversed string:", reverseString(originalString)); // "!dlroW ,olleH"
