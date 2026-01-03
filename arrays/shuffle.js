// Write a js function to shuffle an array

let arr = [1, 2, 3, 4, 5];

for (let idx in arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let temp = arr[idx];
  arr[idx] = arr[randomIndex];
  arr[randomIndex] = temp;
}

console.log(arr);

// Another method

for (let idx in arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  [arr[randomIndex], arr[idx]] = [arr[idx], arr[randomIndex]]
}

console.log(arr)