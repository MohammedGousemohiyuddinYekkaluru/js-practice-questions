//Write a function that takes a string and returns it reversed.

const reverseString = (input) => {
    return input.split('').reverse().join('');
}

console.log(reverseString("Gouse"));