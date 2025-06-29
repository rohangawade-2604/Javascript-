// Example 1

// Write a program to calculate the age of the Student whether he is an adult or minor using if-else statement.

let age = 20;

if (age > 18) {
    console.log("You are a adult.");
} else {
    console.log("You are an minor.");
}

// __________________________________________________________________________________________________________________________________

//Example 2

// Write a program to implement the dark mode on a website using if-else statement.

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}
else{
    color = "white";
}

console.log(color)

// __________________________________________________________________________________________________________________________________

// Example 3 

// write a program to check if a number is even or odd using if-else statement.

let number = 6;

let cond1 = number % 2 === 0;

if (cond1) {
    console.log("The number is even.");
}
else{
    console.log("The number is odd.");
}
