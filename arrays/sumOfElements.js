//Write a function that takes an array of numbers and returns the sum of all elements.

let arr = [1, 2, 3, 4, 5];

//solve by using for loop

function sumOfElements(arr) {
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumOfElements(arr));

//solve by using reduce() method

function sumOfElements2(arr) {
  let result = arr.reduce((acc, curr) => acc + curr, 0);
  return result;
}

console.log(sumOfElements2(arr));
