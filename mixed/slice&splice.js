//Difference between slice and splice

// slice() → does NOT modify original array
const arr1 = [1, 2, 3, 4, 5];

const sliced = arr1.slice(1, 4);

console.log("Original after slice:", arr1); 
// [1, 2, 3, 4, 5]

console.log("Sliced array:", sliced);       
// [2, 3, 4]


// splice() → modifies original array
const arr2 = [1, 2, 3, 4, 5];

const spliced = arr2.splice(1, 3);

console.log("Original after splice:", arr2); 
// [1, 5]

console.log("Spliced array:", spliced);       
// [2, 3, 4]

