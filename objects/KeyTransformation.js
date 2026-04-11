// Write a function that takes an object with camelCase keys and returns a new object with snake_case keys.

function toSnakeCase(obj) {
  const newObj = {};
  
  for (let key in obj) {
    const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    newObj[snakeKey] = obj[key];
  }
  
  return newObj;
}

console.log(toSnakeCase({ userName: 'JS_Dev', accountStatus: 'Active' }));