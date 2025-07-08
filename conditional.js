//Conditional logic is how your program makes decisions. JS provides if, else if, else, and
// ternary for branching logic.
//1. if statement 
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}

// 2. if-else statement
let score = 75;
if (score >= 50) {
    console.log("You passed the exam.");
}
else {
    console.log("You failed the exam.");
}

// 3. if-else if-else statement
let temperature = 30;
if (temperature > 30) {
    console.log("It's hot outside.");
}
else if (temperature < 10) {
    console.log("It's cold outside.");
}
else {
    console.log("The weather is moderate.");
}
// 4. Ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
// 5. Switch statement
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
// 6. Logical operators
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("You can relax today.");
}
// 7. Short-circuit evaluation
let isMember = true;
let discount = isMember && "You get a discount!";
console.log(discount); // "You get a discount!" if isMember is true, otherwise
// undefined
// 8. Using logical operators in conditions
let hasPermission = true;
if (hasPermission && isLoggedIn) {
    console.log("You can access this page.");
}
// 9. Using logical operators with functions
function canAccessPage(userRole) {
    return userRole === "admin" || userRole === "editor";
}
let userRole = "admin";
if (canAccessPage(userRole)) {
    console.log("Access granted.");
}

//Assignments: Conditional Logic
// 1. Write a program that checks if a number is positive, negative, or zero.
let number = -5;
if (number > 0) {
    console.log("The number is positive.");
}
else if (number < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}

// 2. Use if...else to determine if a person can vote based on age.
let voterAge = 17;
if (voterAge >= 18) {
    console.log("You can vote.");
}
else {
    console.log("You cannot vote yet.");
}

// 3. Build a grade calculator using if...else if...else.
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// 4. Use a nested if to check if a user is logged in and has admin access.
let isUserLoggedIn = true;
let isAdmin = false;
if (isUserLoggedIn) {
    if (isAdmin) {
        console.log("Welcome, Admin!");
    }
    else {
        console.log("Welcome, User!");
    }
}

// 5. Rewrite a simple if...else using the ternary operator.
let temperatureCelsius = 25;
let temperatureStatus = temperatureCelsius > 30 ? "It's hot." : "It's not hot.";
console.log(temperatureStatus);
