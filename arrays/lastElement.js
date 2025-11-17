//create a function that returns the last element of an array

let arr = [1, 2, 3, 4, 5]

function getLastElement(arr){
    return arr[arr.length - 1];
}

let lastElement = getLastElement(arr);
console.log(lastElement)