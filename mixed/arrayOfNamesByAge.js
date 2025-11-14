//Given an array of user objects, return an array containing only the names of users whose age is above 18.

const users = [
  { name: "Ayaan", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Kunal", age: 19 },
  { name: "Riya", age: 15 }
];


function usersAboveAge(users){
   return users
   .filter(user => user.age > 18)
   .map(user => user.name);
}

console.log(usersAboveAge(users))