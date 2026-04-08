// create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values

function getStringValues(arr) {
  let stringsOnly = [];
  
  for (let val of arr) {
    if (typeof val === 'string') {
      stringsOnly.push(val);
    }
  }
  
  return stringsOnly;
}

const arr1 = [1, 2, "a", "b", 3, "c"];
console.log(getStringValues(arr1));

// Another Method

let arr = [1, 2, "a", "b", 3, "c"]

function getStringValues(arr){
    return [...arr].filter(val => isNaN(val))
}

console.log(getStringValues(arr))
