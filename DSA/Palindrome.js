const palindrome = 121;

const isPalindrome = () => {

    let newArray = palindrome.toString().split("").map(Number);
    // console.log(newArray);
    let i = newArray.length-1;
    let ans="";

    while(i>=0){
        ans += newArray[i];
        i--
    }
    console.log(ans)

    // let jhola = "";
    // for(let i=newArray.length-1; i>=0; i--){
    //     jhola += newArray[i]
    //     jhola = jhola + newArray[i]
    //     console.log(jhola)
    // }
    
    // +jhola

    if(ans == palindrome){
        console.log("this is the palindrome part")
    }
    else{
        console.log("This is not the palindrome")
    }
    return
}

isPalindrome()