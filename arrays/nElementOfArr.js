// Write a function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

function getArrayElement(arr, n) {
    if(!n) return arr[0]
    else if(n > arr.length) `${n} elements are not present in the array`
    else return arr.slice(0, n)
}

console.log(getArrayElement([23, 55, "apple", "mango"], 4))