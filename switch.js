//The switch statement is a cleaner alternative to long chains of if...else if...else.

//basic switch statement
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("It's an apple.");
        break;
    case "banana":
        console.log("It's a banana.");
        break;
    case "cherry":
        console.log("It's a cherry.");
        break;
    default:
        console.log("Unknown fruit.");
}
// This will print "It's an apple."
// The switch statement evaluates the expression (fruit) and matches it against each case.
// If a match is found, the corresponding block of code is executed.
// If no match is found, the default case is executed.

//2.default case
// The default case is optional and runs if no other case matches.
// It acts like the "else" in an if-else chain.
// In the example above, if fruit is not "apple", "banana", or "cherry", it will print "Unknown fruit."
// The break statement is used to exit the switch block after a case is executed.
// Without break, the code would continue executing into the next case, which is usually not desired
   
//3.grouping multiple cases
// You can group multiple cases together if they should execute the same code.
switch (fruit) {
    case "apple":
    case "banana":
        console.log("It's either an apple or a banana.");
        break;
    case "cherry":
        console.log("It's a cherry.");
        break;
    default:
        console.log("Unknown fruit.");
}
// This will print "It's either an apple or a banana." if fruit is "apple" or "banana".
// Grouping cases helps reduce code duplication when multiple values share the same logic.

//4.replacing long if-else chains
// The switch statement is often used to replace long if-else chains for better readability.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


//Assignments: Switch Statement
// 1. Create a switch block to print day names based on 1–7.
let dayNumber = 4; // Example day number
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// 2. Create a grading system using switch(true) like shown above.
let score = 85; // Example score
switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    case (score >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}

// 3. Use switch to categorize vehicles: "car","bike","truck".
let vehicle = "bike"; // Example vehicle type
switch (vehicle) {
    case "car":
        console.log("It's a car.");
        break;
    case "bike":
        console.log("It's a bike.");
        break;
    case "truck":
        console.log("It's a truck.");
        break;
    default:
        console.log("Unknown vehicle type.");
}

// 4. Implement a simple calculator using switch with +, -, *, /.
let operation = "+"; // Example operation
let num1 = 10; // First number
let num2 = 5; // Second number
switch (operation) {
    case "+":
        console.log("Result:", num1 + num2);
        break;
    case "-":
        console.log("Result:", num1 - num2);
        break;
    case "*":
        console.log("Result:", num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log("Result:", num1 / num2);
        } else {
            console.log("Error: Division by zero");
        }
        break;
    default:
        console.log("Invalid operation");
}
// 5. Convert an existing if...else block into a switch.
let weather = "sunny"; // Example weather condition
switch (weather) {
    case "sunny":
        console.log("It's a sunny day.");
        break;
    case "rainy":
        console.log("It's raining.");
        break;
    case "cloudy":
        console.log("It's cloudy.");
        break;
    default:
        console.log("Weather condition unknown.");
}
