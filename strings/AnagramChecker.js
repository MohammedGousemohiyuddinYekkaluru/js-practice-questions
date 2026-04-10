// Check if two strings are anagrams of each other (contain the same characters in the same quantities).

function isAnagram(stringA, stringB) {
  const normalize = (str) => 
    str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');

  return normalize(stringA) === normalize(stringB);
}

console.log(isAnagram('rail safety', 'fairy tales'));