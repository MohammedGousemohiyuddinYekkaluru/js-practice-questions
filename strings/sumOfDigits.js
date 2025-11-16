//Write a function that returns the sum of all digits in the number.

function sumOfDigits(num){
    return num.split('')
    .reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(sumOfDigits("987"));

//shorter

function sumOfDigits2(num){
    return [...num].reduce((acc, curr) => acc + +curr, 0);
}

console.log(sumOfDigits2("111"));