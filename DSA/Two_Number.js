const arr = [2,7,11,15] 

const target = 9;

const Number = () => {
    for(let i=0 ; i<arr.length; i++){
        // console.log(arr[i])
        for(let j=i+1; j<arr.length; j++){
            console.log(arr[j])
            if(arr[i]+arr[j] === target){
                // console.log(i,j);
            }
        }
    }
}
Number();