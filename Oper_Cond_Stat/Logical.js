let a = 6
let b = 3;

let cond1 = a > b;
let cond2 = a === 6;
let cond3 = a === 4;

console.log("logical answer is ", cond1 && cond2); // Output: logical answer is cond1 && cond2 true, it checks if both conditions are true
console.log("logical answer is ", cond1 && cond3); // Output: logical answer of cond1 && cond3 is false, it checks if both conditions are true

console.log("logical answer is ", cond1 || cond2); // Output: logical answer is cond1 || cond2 true, it checks if at least one condition is true
console.log("logical answer is ", cond1 || cond3); // Output: logical answer of cond1 || cond3 is true, it checks if at least one condition is true

console.log("logical answer is ", !cond1); // Output: logical answer is !cond1 false, it negates the condition, if cond1 is true, it returns false
console.log("logical answer is ", !cond2); // Output: logical answer is !cond2 false, it negates the condition, if cond2 is true, it returns false