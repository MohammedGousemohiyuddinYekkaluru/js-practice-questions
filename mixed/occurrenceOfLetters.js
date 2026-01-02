// Write a js function to get the number of occurrences of each letter in a specified string

function occurenceOfLetters(str) {
    let obj = {};
    str.split("").forEach(item => {
        if(!(item in obj)){
            obj[item] = 1;
        }else{
            obj[item] += 1
        }
    })
    return obj;
}

console.log(occurenceOfLetters("javascript"))