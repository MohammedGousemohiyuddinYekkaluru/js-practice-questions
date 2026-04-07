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

// Another Method

function occurenceOfLetters2(str) {
    return str.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

console.log(occurenceOfLetters2("javascript"));