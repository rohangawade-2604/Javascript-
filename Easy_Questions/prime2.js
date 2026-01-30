let n = 13;
let isPrime = true

if (n<2){
    console.log("Not Prime")
}
else{
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            isPrime = false
            break
        }
    }
}
        
if(isPrime){
    console.log("Prime Number")
}
else{
    console.log("Not Prime")
}