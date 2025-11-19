//Given an array of striings, retyrn a new array where all strings are in uppercase


let arrOfStr = ["gouse", "nizam", "saniya"];

function getStringsInUpperCase(arr) {
    return [...arr].map(str => str.toUpperCase())
}

let newArr = getStringsInUpperCase(arrOfStr);
console.log(newArr);


