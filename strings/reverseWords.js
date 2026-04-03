// Given a string reverse each word in the sentence

let str = "Hello! My name is Gouse";

let reverseWordString = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
}).join(" ");

console.log(reverseWordString);






//Write a function that reverses each word individually, not the whole sentence.

function reverseWords(sentence){
    return sentence.split(" ")
    .map(word => word.split('').reverse().join(''))
    .join(" ");
}

console.log(reverseWords("I Love Javascript"))