const lib = require('../assertArraysEqual');
const assertArraysEqual = lib.assertArraysEqual;
const middleLib = require('../middle');
const middle = middleLib.middle;


console.log(assertArraysEqual(middle([1]), [])); // => true
console.log(assertArraysEqual(middle([1, 2]), [])); // => true

console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => true

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // true

