let num = 8;

let count = 0

for(let i=0; i<=num; i++){
    // console.log(num[i])

    if(num % i === 0){
        console.log(num)
        count++
        console.log(count)
    }
}

if (count === 2){
    console.log("prime number")
}
else{
    console.log("not a prime number")
}
