/*
The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value.
It will take in two parameters:
1. The array to work with
2. The callback (which Lodash calls "predicate")
*/

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

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const test1 = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, test1); // [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const test2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, test2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]