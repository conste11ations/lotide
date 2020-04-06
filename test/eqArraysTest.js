const lib = require('../assertEqual');
const libEqArrays = require('../eqArrays');
const assertEqual = lib.assertEqual;
const eqArrays = libEqArrays.eqArrays;

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false

console.log(assertEqual(eqArrays([], []), true));
console.log(assertEqual(eqArrays(["fi", "fo", "fum"], ["fi", "fo"]), false));