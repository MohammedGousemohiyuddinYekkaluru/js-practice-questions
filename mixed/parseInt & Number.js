// Diffrence between parseInt and Number

console.log(parseInt("225.4555")) //This converts it in to a number and returns you a integer part i.e., 225
console.log(Number("225.255")) //This also converts it in to a number and returns the Number i.e., 225.255

console.log(Number("455.67px")) //This gives you NAN -> not a number

console.log(parseInt("2hvyhba99")) //output:- 2 //In this if starting number of a string is number and other part is even not a number then also it returns the first number

console.log(parseInt("110", 2)) //It also takes a value 2 = binary; 10 = decimal ; 16 = hexadecimal...
//parseInt converts the number into binary, decimal and hexadecimal also