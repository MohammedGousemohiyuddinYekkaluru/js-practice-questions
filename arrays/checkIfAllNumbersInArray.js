//Write a function that checks if all elements in an array are numbers

const arr = [1, 2, "3", 4, 5]

function checkArray(arr) {
   return arr.every(elem => typeof elem === "number")
}

let isAllNumbers = checkArray(arr);
console.log(isAllNumbers)

// OR

function checkArray2(arr) {
    const filtered = arr.filter(elem => typeof elem === "number");
    return filtered.length === arr.length;
}

let isAllNumbers2 = checkArray(arr);
console.log(isAllNumbers2)

