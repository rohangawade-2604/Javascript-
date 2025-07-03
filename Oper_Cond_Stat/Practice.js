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


// write a code  which can give grades to a student accoring to the marks he obtained in an exam.
// A+ = 80-100
// A = 70-79
// B = 60-69        
// C = 50-59
// D = 40-49
// E = 0-39
// F = less than 0


let marks = "150";

if (marks >= 80 && marks <= 100){
    console.log("A+");
}
else if(marks >= 70 && marks <= 79){
    console.log("A");
}
else if(marks >= 60 && marks <= 69){
    console.log("B");
}
else if(marks >= 50 && marks <= 59){
    console.log("C");
}
else if(marks >= 40 && marks <= 49){
    console.log("D");
}
else if(marks >= 35 && marks <= 39){
    console.log("E");
}
else{
    console.log("F");
}