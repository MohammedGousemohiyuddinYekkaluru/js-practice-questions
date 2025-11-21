//Write a function that returns an array containing unique values from both arrays.

function uniqueValues(arr1, arr2){
    return [...new Set([...arr1, ...arr2])]
}

console.log(uniqueValues([1, 2, 3], [3, 4, 5]));


//another way to remove duplicate values

function removeDuplicates(arr) {
    let uniqueArr = arr.filter((element, index) => {
        return arr.indexOf(element) === index
    })

    return uniqueArr
}

console.log(removeDuplicates([1, 5, 3, 1, 1, 1, 3]))