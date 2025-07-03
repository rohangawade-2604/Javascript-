let number = "0"

if(number > 0){
    console.log("the number is positive")
}
else if(number < 0) {
    console.log("the number is negative")
}
else{
    console.log("the number is zero")
}


// Write a program to check whether a number is divisible by 5.

let num = "10"

if(num % 5 === 0){
    console.log("The number is divisible by 5.");
}else{
    console.log("The number is not divisible by 5.");
}


// Write a program to check whether a number is divisible by 10.

let num1 = "52"

if (num1 % 10 === 0){
    console.log("the number is multiply by 10")
}else{
    console.log("invalid number")
}


// get the user input to find the multiple of 5 or not
const prompt = require('prompt-sync')();
let num3 = prompt("enter the number")

if (num3 % 5 === 0){
    console.log("the number is multiple of 5")
}else{
    console.log("the number is not multiple of 5")
}