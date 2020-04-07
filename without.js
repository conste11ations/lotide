
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

const without = function(origArray, removeArray) {
  
  let results = [];

  if (eqArrays(origArray, removeArray)) {

    return [];

  } else {
    for (let j = 0; j < origArray.length; j++) {

      let check = false;

      for (let i = 0; i < removeArray.length; i++) {

        if (origArray[j] === removeArray[i]) {
          check = true;
        }
      }
      if (check === false) {
        results.push(origArray[j]);
      }
    }
    return results;
  }
};

// TEST CODE

const words = ["hello", "world", "lighthouse"];
const newWords = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(newWords); // => ['hello', 'world']

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["a", "c"], ["a", "c"]));

module.exports = without;