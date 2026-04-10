// Take an array that could have multiple levels of nested arrays and turn it into a single flat array.

function flatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}

console.log(flatten([1, [2, [3, [4]], 5]]));