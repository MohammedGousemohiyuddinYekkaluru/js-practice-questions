// create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values

let arr = [1, 2, "a", "b", 3, "c"]

function getStringValues(arr){
    return [...arr].filter(val => isNaN(val))
}

console.log(getStringValues(arr))
