//const assert = require('assert');
const AssertionError = require('assert').AssertionError;

// In the requirements, strings seem to have quotation marks, numbers do not.
const addQuotes = function(input) {
  if (typeof input === 'number') {
    return input;
  } else {
    return '"' + input + '"';
  }
};

const assertEqual = function(actual, expected) {

  // Defining the messages to be printed to console
  const passMsg = `💚🥬📗 Assertion Passed: ${addQuotes(actual)} === ${addQuotes(expected)}`;
  const errorMsg = `🍎🧧🔴 Assertion Failed: ${addQuotes(actual)} !== ${addQuotes(expected)}`;
 
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
};

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  } else {
      for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] === arrayB[i]) {
        } else {
          return false;
        }
      }
      return true;
  }
}

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("💚🥬📗 Assertion Passed: ", actual, " === ", expected);    
  } else {
    console.log("🍎🧧🔴 Assertion Failed: ", actual, " !== ", expected);
  }
}

// TEST CODE

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertArraysEqual([], [])); // true
console.log(assertArraysEqual(["fi", "fo", "fum"], ["fi", "fo"])); // false