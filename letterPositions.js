
const eqArrays = function(arrayA, arrayB) {
  if (!arrayA || !arrayB || arrayA.length !== arrayB.length) {
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

// returns all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};

  for (let index in sentence) {
    (results[sentence[index]] = (results[sentence[index]] || [])).push(Number(index));
  }
  return results;
};

// TEST CODE

const testStr = "hello";
const result1 = letterPositions(testStr);

assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);
// or
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);