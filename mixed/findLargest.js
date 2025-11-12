//Write a function that takes numbers and returns the largest one.

function findLargest(num1, num2, num3) {
  const numbers = [num1, num2, num3]; // put all numbers into an array
  const largest = Math.max(...numbers); // spread to get max
  return largest;
}

console.log(findLargest(10, 25, 7));
