//Write a function that reverses each word individually, not the whole sentence.

function reverseWords(sentence){
    return sentence.split(" ")
    .map(word => word.split('').reverse().join(''))
    .join(" ");
}

console.log(reverseWords("I Love Javascript"))