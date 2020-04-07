/*(
Our map function will take in two arguments:
1. An array to map
2. A callback function
The map function will return a new array based on the results of the callback function.
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  } else {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("💚🥬📗 Assertion Passed: ", actual, " === ", expected);
  } else {
    console.log("🍎🧧🔴 Assertion Failed: ", actual, " !== ", expected);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // true

const results2 = map(words, word => word.split("").reverse().join(""));
const test2 = ["dnuorg", "lortnoc", "ot", "rojam", "mot"];
assertArraysEqual(results2, test2);

module.exports = map;