// Write a function that splits an array into sub-arrays of a specified length.

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));