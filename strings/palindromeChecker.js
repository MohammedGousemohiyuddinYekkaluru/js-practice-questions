// Create a function that checks if a string is a palindrome (reads the same forward and backward), ignoring case and non-alphanumeric characters

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  
  const reversed = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversed;
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));