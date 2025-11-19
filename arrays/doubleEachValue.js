//Create an array of numbers and double each value


const arrOfNums = [1, 2, 3, 4, 5, 6];

function getDoubleValue(arr) {
    return arr.map(num => num * 2);
}

const doubleValues = getDoubleValue(arrOfNums);

console.log(doubleValues)