//1. object destructuring
const person = {
    user: "Alice",
    a: 30,
    c: "Wonderland"
};
// };
// Destructuring the object
const { user, a, c } = person;
console.log(user); // "Alice"
console.log(age); // 30
console.log(city); // "Wonderland"

//2.nested object destructuring
const userProfile = {
    user: {
        user1: "Bob",
        age: 25
    },
    location: {
        city: "Atlantis",
        country: "Ocean"
    }
};
// Destructuring nested objects
const {
    user: { user1, age },
    location: { city, country }
} = userProfile;
console.log(user1); // "Bob"
console.log(age); // 25
console.log(city); // "Atlantis"
console.log(country); // "Ocean"
console.log("Country:", country); // "Ocean"
console.log("City:", city); // "Atlantis"
console.log("User:", user1); // "Bob
console.log("Age:", age); // 25
console.log("User Profile:", userProfile); // { user: { user
//     user1: "Bob", age: 25 }, location: { city: "Atlantis", country: "Ocean" } }

//3. array destructuring
const numbers = [1, 2, 3, 4, 5];
// Destructuring the array
const [first, second, third, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(rest); // [4, 5]

//4. the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// Using the spread operator to combine arrays
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4,
// 5, 6]

//5. the rest operator
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
//6. deep object iteration
const data ={
    use1:{score:10},
    use2:{score:20},
    use3:{score:30}
};
function deepObjectIteration(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${JSON.stringify(obj[key])}`);
        }
    }
}
deepObjectIteration(data);
// Output:
// use1: {"score":10}
// use2: {"score":20}
// use3: {"score":30}

//7.object.keys/values/entries
const sampleObject = {
    name: "Charlie",
    age: 28,
    city: "Paris"
};
// Using Object.keys()
const keys = Object.keys(sampleObject);
console.log("Keys:", keys); // ["name", "age", "city"]
// Using Object.values()
const values = Object.values(sampleObject);
console.log("Values:", values); // ["Charlie", 28, "Paris"]
// Using Object.entries()
const entries = Object.entries(sampleObject);
console.log("Entries:", entries); // [["name", "Charlie"], ["age", 28], ["city", "Paris"]]

