//Write a function that checks if all elements in an array are numbers

const arr = [1, 2, "3", 4, 5]

function checkArray(arr) {
   return arr.every(elem => typeof elem === "number")
}

let isAllNumbers = checkArray(arr);
console.log(isAllNumbers)

