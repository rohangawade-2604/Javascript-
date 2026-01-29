let str = "54748";

// let num2 = +str;  // create the string into the number format
// console.log(num2)

let sum = 0;

for(let i=0; i<=str.length-1; i++){
    sum = sum + str[i] ** str.length
    console.log(sum)
}

if(sum === Number(str)){
    console.log("is the armstrong")
}
else{
    console.log("not a armstrong")
}