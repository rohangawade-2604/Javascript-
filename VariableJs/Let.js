// This code demonstrates the use of the 'let' keyword in JavaScript.
// The variable 'age' is initially set to 24, then reassigned to 30, and finally to 50.

// The variable 'age' is declared using 'let', allowing it to be reassigned.
// The final value of 'age' is 50, which is logged to the console.

let age = 24;

age = 30;

age = 50;

console.log(age); // Output: 50
console.log(typeof age) // Output: number

// The below code demonstrates the use of 'let' in a block scope.


{
    let age = 24;
    // let age = 30;   // This will throw an error because 'age' is already declared in this block scope.
    console.log(age);
}

