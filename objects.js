//Objects are key-value pair collections used to store structured data. 
// They form the backbone of most JavaScript code, especially in Node.js and React.

//crate an object
let person = {
    name: "Alice",
    age: 28,
    isStudent: false
};
// Accessing a property using dot notation
console.log(person.name); // "Alice"
// Accessing a property using bracket notation
console.log(person["age"]); // 28
// Modifying a property
person.isStudent = true; // Change isStudent to true
console.log(person.isStudent); // true
// Adding a new property
person.city = "New York"; // Add a new property city
console.log(person.city); // "New York"
// Deleting a property
delete person.age; // Remove the age property
console.log(person.age); // undefined (age property is deleted)
// Iterating through properties using for...in
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Prints each key-value pair
}
// Checking if a property exists
console.log("name" in person); // true
console.log("age" in person); // false (age property is deleted)
// Object methods
person.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
};
// Calling the greet method
person.greet(); // "Hello, my name is Alice."
// Using Object.keys() to get an array of property names
console.log(Object.keys(person)); // ["name", "isStudent", "city", "greet"]
// Using Object.values() to get an array of property values
console.log(Object.values(person)); // ["Alice", true, "New York", [Function: greet]]
// Using Object.entries() to get an array of key-value pairs
console.log(Object.entries(person)); // [["name", "Alice"], ["isStudent", true],
// ["city", "New York"], ["greet", [Function: greet]]]
// Nested objects
let student = {
    name: "Bob",
    details: {
        age: 22,
        major: "Computer Science"
    }
};
// Accessing nested properties
console.log(student.details.age); // 22
console.log(student["details"]["major"]); // "Computer Science"
// Adding a nested property
student.details.gpa = 3.8; // Add GPA to details
console.log(student.details.gpa); // 3.8
// Deleting a nested property
delete student.details.major; // Remove major from details  
console.log(student.details.major); // undefined (major property is deleted)
// Object destructuring
let { name, isStudent, city } = person; // Destructure properties from person
console.log(name); // "Alice"
console.log(isStudent); // true
console.log(city); // "New York"
// Object spread operator
let newPerson = { ...person, country: "USA" }; // Create a new object with spread operator
console.log(newPerson); // { name: "Alice", isStudent: true, city: "New York", country: "USA" }
// Object cloning
let clonedPerson = { ...person }; // Clone person object using spread operator
console.log(clonedPerson); // { name: "Alice", isStudent: true, city: "New York" }
// Object comparison
function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
let anotherPerson = { name: "Alice", isStudent: true, city: "New York" };
console.log(areObjectsEqual(person, anotherPerson)); // true (if properties and values match)
// Object merging
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObject = mergeObjects(obj1, obj2); // Merging obj1 and obj2
console.log(mergedObject); // { a: 1, b: 3, c
//: 4 } (obj2's b overrides obj1's b)
// Object freezing
let frozenPerson = Object.freeze(person); // Freeze the person object
// frozenPerson.name = "Charlie"; // This will not change the name property
// console.log(frozenPerson.name); // "Alice" (name remains unchanged)
// Object sealing
let sealedPerson = Object.seal(person); // Seal the person object
// sealedPerson.age = 30; // This will not add a new property
// console.log(sealedPerson.age); // undefined (age property is not added)
// sealedPerson.isStudent = false; // This will change the isStudent property
console.log(sealedPerson.isStudent); // false (isStudent is changed)
// Object prototype
let prototypePerson = Object.create(person); // Create a new object with person as prototype
prototypePerson.name = "Charlie"; // Add a new property
console.log(prototypePerson.name); // "Charlie" (name is overridden)
console.log(prototypePerson.age); // undefined (age is not inherited)
// Accessing prototype properties
console.log(prototypePerson.isStudent); // true (inherited from person)
// Object methods
let objMethods = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
// Using object methods
console.log(objMethods.add(5, 3)); // 8
console.log(objMethods.subtract(5, 3)); // 2
// Object iteration with forEach (using Object.keys)
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`); // Prints each key-value pair
});

//Assignments: Objects
// 1.Create a book object with title, author, and year. Add a method getSummary().
let book = {
    title: "1984",
    author : "George Orwell",
    year: 1949,
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
};
console.log(book.getSummary()); // "1984 by George Orwell, published in 1949



// 2. Write a function that takes an object and prints all key-value pairs.
function printObject(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
printObject(book); // Prints all key-value pairs of the book object

// 3. Use destructuring to extract name and email from a user object.
let user =
{
    name: "Alice",
    email: "alice@gmail.com",
    age: 30
};
let { n, email } = user; // Destructuring to extract name and email
console.log(`Name: ${n}, Email: ${email}`); // "Name: Alice, Email:


// 4. Merge two objects: profile and settings.
let profile = {
    username: "john_doe",
    age: 25
};
let settings = {
    theme: "dark",
    notifications: true
};
let mergedProfile = { ...profile, ...settings }; // Merging profile and settings
console.log(mergedProfile); // { username: "john_doe", age: 25, theme: "dark", notifications: true }

// 5. Create a nested object representing a laptop and access its battery capacity.
let laptop = {
    brand: "Dell",
    model: "XPS 13",
    specs: {
        processor: "Intel i7",
        ram: "16GB",
        battery: {
            capacity: "52Wh"
        }
    }
};
console.log(`Laptop Battery Capacity: ${laptop.specs.battery.capacity}`); // "Laptop Battery Capacity: 52Wh"
