let str = "121"

let reverse = "";

for(let i=str.length-1; i>=0;i--){
    reverse += str[i]
    console.log(reverse)
}

if(reverse === str){
    console.log("answer is palindrome")
}
else{
    console.log("answer is not a palindrome")
}

