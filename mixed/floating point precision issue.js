// Floating point precision issue in JavaScript

const result = 0.1 + 0.2;

console.log(result);
console.log(result === 0.3); // false

// This happens because JavaScript uses binary floating point (IEEE 754 format).
// Some decimal numbers like 0.1 and 0.2 cannot be represented exactly in binary.
// So 0.1 + 0.2 becomes 0.30000000000000004 internally, which is not exactly 0.3.

