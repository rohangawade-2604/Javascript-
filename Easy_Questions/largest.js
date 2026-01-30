let arr = [20, 100, 10];

let largest = arr[0];
let smallest = arr[0]

for(let i=0; i<arr.length; i++){

    if(arr[i]> largest){            //to find the largest number 
        largest = arr[i]
    }

    if(arr[i] < smallest){
        smallest = arr[i]             //to find the smallest number
    }
}

console.log(largest)
console.log(smallest)