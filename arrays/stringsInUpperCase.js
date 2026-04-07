//Given an array of striings, return a new array where all strings are in uppercase


let arrOfStr = ["gouse", "nizam", "saniya"];

function getStringsInUpperCase(arr) {
    return [...arr].map(str => str.toUpperCase())
}

let newArr = getStringsInUpperCase(arrOfStr);
console.log(newArr);

// Another Method

function getStringsInUpperCase2(arr) {
    return Array.from(arr, str => str.toUpperCase());
}

console.log(getStringsInUpperCase2(["gouse", "nizam", "saniya"])); 
