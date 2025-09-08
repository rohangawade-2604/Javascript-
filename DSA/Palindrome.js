const palindrome = 122;

const isPalindrome = () => {

    let newArray = palindrome.toString().split("");
    console.log(newArray);

    let jhola = "";
    for(let i=newArray.length-1; i>=0; i--){
        jhola += newArray[i]
        // jhola = jhola + newArray[i]
        console.log(jhola)
    }
    
    +jhola

    if(jhola == palindrome){
        console.log("this is the palindrome part")
    }
    else{
        console.log("This is not the palindrome")
    }
    return
}

isPalindrome()