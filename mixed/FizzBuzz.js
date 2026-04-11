// Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, "Buzz"; for both, "FizzBuzz".

function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    
    result.push(output || i);
  }
  return result;
}

console.log(fizzBuzz(15));

