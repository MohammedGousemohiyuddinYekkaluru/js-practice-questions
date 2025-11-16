//Write a function that returns an array containing unique values from both arrays.

function uniqueValues(arr1, arr2){
    return [...new Set([...arr1, ...arr2])]
}

console.log(uniqueValues([1, 2, 3], [3, 4, 5]));