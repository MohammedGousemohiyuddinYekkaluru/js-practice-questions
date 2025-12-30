// In an array of numbers and strings, only add those numbers which are not strings

let arr = [1, "a", "2", "b", 3, 4, "5", 6, "c"];

function addOnlyNumbers(arr) {
  return arr.reduce((sum, item) => 
    (typeof item === "number" ? sum + item : sum),
    0);
}

sumOfNumbers = addOnlyNumbers(arr);
console.log(sumOfNumbers); 

//another method
sum = 0;

arr.forEach(item => {
  if (typeof item === "number") {
    sum += item
  }
})

console.log(sum);