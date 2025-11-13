//Write a function that takes an object and returns an array of all its property names.

const obj = { name: "Gouse", age: 23, country: "India" }

function getKeys(obj){
    return Object.keys(obj);  //Object.keys returns an array by default...
}

const keys = getKeys(obj);
console.log(keys)

function getKeys1(obj){
    let keysArr = [];

    for(let key in obj){
        keysArr.push(key);
    }
    return keysArr;
}

console.log(getKeys1(obj));