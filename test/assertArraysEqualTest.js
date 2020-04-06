const lib = require('../assertArraysEqual');
const assertArraysEqual = lib.assertArraysEqual;
const eqArrayslib = require('../eqArrays');
const eqArrays = eqArrayslib.eqArrays;

console.log(assertArraysEqual(eqArrays([], [null]), false));
const test = ["a", "b"];
console.log(assertArraysEqual(eqArrays(["a", "b"], test), true));