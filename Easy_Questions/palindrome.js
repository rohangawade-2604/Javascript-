let string = "121";

let arr1 = []

let arr = string.split('');
console.log(arr);

for(let i = arr.length-1; i>=0; i--){
    arr1.push(arr[i])
    console.log(typeof arr1)
}

let arr3 = arr1.join("")

if(arr3 === string){
    console.log("answer is palindrome")
}
else{
    console.log("not a palindrome")
}