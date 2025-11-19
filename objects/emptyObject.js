//Check if an object is empty (has no keys)

let obj = {name : "Gouse"}

function checkEmptyObject(obj) {
    return Object.keys(obj).length === 0 ? "True" : "False"
}

console.log(checkEmptyObject(obj))