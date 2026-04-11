// Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
  const words = str.split(' ');
  return Math.max(...words.map(word => word.length));
}

console.log(findLongestWordLength("Google do a barrel roll"));