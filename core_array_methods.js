//map():transform each element in an array
function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
    }
// Example usage:
const numbers = [1, 2, 3];
const doubled = map(numbers, (num) => num * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6
// ]

// filter():filter elements based on a condition
function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
// Example usage:
const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2]

// reduce():reduce an array to a single value
function reduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
// Example usage:
const sum = reduce(numbers, (acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum); // 6

// find():find the first element that satisfies a condition
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
// Example usage:
const firstEven = find(numbers, (num) => num % 2 === 0);
console.log("First even number:", firstEven); // 2


// some():check if at least one element satisfies a condition
function some(array, callback) {    
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
// Example usage:
const hasEven = some(numbers, (num) => num % 2 === 0);
console.log("Has even number:", hasEven); // true


// every():check if all elements satisfy a condition
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
// Example usage:
const allEven = every(numbers, (num) => num % 2 === 0);
console.log("All numbers are even:", allEven); // false


// includes():check if an array includes a value
function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
// Example usage:
const hasThree = includes(numbers, 3);
console.log("Includes 3:", hasThree); // true


// indexOf():find the index of a value in an array
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
// Example usage:
const indexOfTwo = indexOf(numbers, 2);
console.log("Index of 2:", indexOfTwo); // 1


// lastIndexOf():find the last index of a value in an array
function lastIndexOf(array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
// Example usage:
const lastIndexOfOne = lastIndexOf(numbers, 1);
console.log("Last index of 1:", lastIndexOfOne); // 0


// findIndex():find the index of the first element that satisfies a condition
function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
// Example usage:
const indexOfFirstEven = findIndex(numbers, (num) => num % 2 === 0);
console.log("Index of first even number:", indexOfFirstEven); // 1


// findLastIndex():find the index of the last element that satisfies a condition
function findLastIndex(array, callback) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
// Example usage:
const indexOfLastEven = findLastIndex(numbers, (num) => num % 2
=== 0);
console.log("Index of last even number:", indexOfLastEven); // 1


// forEach():execute a function for each element in an array
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
// Example usage:
forEach(numbers, (num, index) => {
    console.log(`Element at index ${index}: ${num}`);
});


// sort():sort an array based on a comparison function
function sort(array, compareFunction) {
    return array.slice().sort(compareFunction);
}
// Example usage:
const sortedNumbers = sort(numbers, (a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers); // [1, 2, 3]


// reverse():reverse the order of elements in an array
function reverse(array) {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}
// Example usage:
const reversedNumbers = reverse(numbers);
console.log("Reversed numbers:", reversedNumbers); // [3, 2, 1]


// join():join elements of an array into a string
function join(array, separator = ",") {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += separator;
        }
    }
    return result;
}
// Example usage:
const joinedNumbers = join(numbers, " - ");
console.log("Joined numbers:", joinedNumbers); // "1 - 2 - 3"


// slice():extract a section of an array
function slice(array, start, end) {
    const result = [];
    for (let i = start; i < (end !== undefined ? end : array.length); i++) {
        result.push(array[i]);
    }
    return result;
}
// Example usage:
const slicedNumbers = slice(numbers, 1, 3);
console.log("Sliced numbers:", slicedNumbers); // [2, 3]


// splice():remove or replace elements in an array
function splice(array, start, deleteCount, ...items) {
    const removed = array.slice(start, start + deleteCount);
    const result = array.slice(0, start).concat(items).concat(array.slice(start + deleteCount));
    array.length = 0; // Clear the original array
    for (let i = 0; i < result.length; i++) {
        array.push(result[i]);
    }
    return removed;
}
// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const removedItems = splice(originalArray, 1, 2, 6, 7);
console.log("Removed items:", removedItems); // [2, 3]
console.log("Modified array:", originalArray); // [1, 6, 7, 4, 5]


//Assignment :
//1. given [2,4,6,8] return array of half the value using map()
function halfValues(array) {
    return map(array, (num) => num / 2);
}
// Example usage:
const Array = [2, 4, 6, 8];
const halfArray = halfValues(originalArray);
console.log("Half values:", halfArray); // [1, 2, 3, 4]

//2. given [12,19,8,25,17] filter out all numbers under 18.
function filterUnder18(array) {
    return filter(array, (num) => num >= 18);
}
// Example usage:
const ages = [12, 19, 8, 25, 17];
const adults = filterUnder18(ages);
console.log("Adults (18 and over):", adults); // [19, 25]

//3.reduce an array of names like ["a","b","c"] to a single string "a,b,c"
function reduceToString(array) {
    return reduce(array, (acc, name) => acc + (acc ? "," : "") + name, "");
}
// Example usage:
const names = ["a", "b", "c"];
const namesString = reduceToString(names);
console.log("Reduced names string:", namesString); // "a,b,c"

//4. from an array of users with {ad,active} properties, return an array of active users.using find()
function findActiveUsers(users) {
    return filter(users, (user) => user.active);
}
// Example usage:
const users = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true }
];
const activeUsers = findActiveUsers(users);
console.log("Active users:", activeUsers); // [{ id: 1, active: true
// }, { id: 3, active: true }]

//5. chain.filter() and map() to find names of users over 21 and capalitalize them.
function findAndCapitalizeUsers(users) {
    return map(filter(users, (user) => user.age > 21), (user) => user.name.toUpperCase());
}
// Example usage:
const usersWithAges = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 }
];
const capitalizedUsers = findAndCapitalizeUsers(usersWithAges);
console.log("Capitalized users over 21:", capitalizedUsers); // ["ALICE",
// "CHARLIE"]
