// Given an array of objects representing people, group them by their age.

function groupBy(arr, key) {
  return arr.reduce((accumulator, currentItem) => {
    const groupValue = currentItem[key];
    
    if (!accumulator[groupValue]) {
      accumulator[groupValue] = [];
    }
    
    accumulator[groupValue].push(currentItem);
    
    return accumulator;
  }, {});
}

const data = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 21 },
  { name: 'Jane', age: 24 }
];
console.log(groupBy(data, 'age'));