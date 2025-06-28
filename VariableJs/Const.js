const age = 24;

age = 30; // This will throw an error because 'age' is a constant and cannot be reassigned.

console.log(age); // Output: 24



// the below code demonstrates the use of 'const' in a block scope.


{
    const age = 24;
    // const age = 30;   // This will throw an error because 'age' is already declared in this block scope.
    console.log(age); // Output: 24
    console.log(typeof age); // Output: number
}