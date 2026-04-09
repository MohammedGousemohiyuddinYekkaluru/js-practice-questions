// Given a string, return an object where the keys are characters and the values are the number of times that character appears.

function charCount(str) {
  const map = {};

  for (let char of str.toLowerCase()) {
    map[char] = (map[char] || 0) + 1;
  }

  return map;
}

console.log(charCount("Javascript")); 