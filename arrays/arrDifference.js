// Compare two arrays and return a new array with items found only in one array, but not both.


function diffArray(arr1, arr2) {
  return [...arr1, ...arr2].filter(
    item => !arr1.includes(item) || !arr2.includes(item)
  );
}

console.log(diffArray(["grass", "dirt", "pink flower"], ["grass", "dirt"])); 