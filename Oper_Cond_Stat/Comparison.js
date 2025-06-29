let a = 5;
let b = 2;
let c = 5;
let d = "5"

// == it just checks if the values are equal, it does not check the data type
console.log("a == b is ", a == b);  // Output: a == b is false, it checks if a is equal to b
console.log("a == c is", a == c);  // Output: a == c is true, it checks if a is equal to c
console.log("a == d is", a == d);  // Output: a == b is true, it converts the string d to a number and checks if a is equal to d


// === it checks if the values are equal and also checks the data type
console.log("a === d is", a === d);  // Output: a === b is false, it checks if a is equal to b and also checks the data type

// != it checks if the values are not equal, it does not check the data type
console.log("a != b is", a != b);  // Output: a != b is true, it checks if a is not equal to b
console.log("a != c is", a != c);  // Output: a != c is false, it checks if a is not equal to c
console.log("a != d is", a != d);  // Output: a != d is false, it converts the string d to a number and checks if a is not equal to d
