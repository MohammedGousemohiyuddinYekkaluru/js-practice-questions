//Write a function that takes an object and returns how many properties it has.

let obj = { name: "Gouse", age: 23, city: "Anantapur" };


function countProperties(obj){
    return Object.keys(obj).length;
}

let properties = countProperties(obj);

console.log(properties);