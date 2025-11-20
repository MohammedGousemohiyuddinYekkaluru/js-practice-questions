//write a function to flatten a nested array

const nestedArr = [1,[2,3], 4];

function getSingleArr(arr) {
    return arr.flat(Infinity);
}

let singleArr = getSingleArr(nestedArr);
console.log(singleArr)
