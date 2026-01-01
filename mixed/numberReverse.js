// Write a javascript function that reverse a number

function numberReverse(num){
    return Number(String(num).split("").reverse().join(""))
}

console.log(numberReverse(56));