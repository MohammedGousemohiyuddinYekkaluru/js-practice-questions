// How to check if an object is an array or not?

function checkArray(elem) {
    return Array.isArray(elem)
}

console.log(checkArray([]));
console.log(checkArray({}));