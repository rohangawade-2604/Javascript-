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


let alpha = "E"

let cond1 = alpha === "a"
let cond2 = alpha === "e"
let cond3 = alpha === "i"
let cond4 = alpha === "o"
let cond5 = alpha === "u"
let cond6 = alpha === "A" && alpha === "E" && alpha == "I" && alpha == "O" && alpha == "U"

if(cond1 || cond2 || cond3 || cond4 || cond5){
    console.log("The letter is a vowel.");
}
else if(cond6){
    console.log("no bigger letter is allowed")
}
else{
    console.log("The letter is a consonant.");
}