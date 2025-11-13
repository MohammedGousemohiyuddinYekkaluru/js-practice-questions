//Write a function that takes an array of numbers and returns a new array containing only the even numbers.

const input = [1, 2, 3, 4, 5, 6];

function findEvenNumbers(arr){
   return arr.filter(num => num % 2 === 0);
}
const evenArray = findEvenNumbers(input)
console.log(evenArray);