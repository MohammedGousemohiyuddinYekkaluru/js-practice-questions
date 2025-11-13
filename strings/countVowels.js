//Write a function that counts the number of vowels (a, e, i, o, u) in a string.

function findVowels(str){
    let vowelsCount = 0;
    for(let i = 0; i <= str.length - 1; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") vowelsCount++
    }
    return vowelsCount;
}

console.log(findVowels('javascript'));