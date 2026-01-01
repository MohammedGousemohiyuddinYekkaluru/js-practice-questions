// Write a javascript function that returns a passed string with letters in alphabeical order

function alphabeicalOrder(str) {
    return str.split("").sort().join("")
}

console.log(alphabeicalOrder("gouse"))