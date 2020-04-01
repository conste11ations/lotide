
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

const middle = function(array) {
  let pivot = Math.floor(array.length / 2);
  let result = [];

  if (array.length <= 2) {
    return result;
  }  else if (array.length % 2 === 0) {
    result.push(array[pivot-1]);
    result.push(array[pivot]);
  } else {
    result.push(array[pivot]);
  }
  return result;
}

// TEST CODE

console.log(assertArraysEqual(middle([1]), [])); // => true
console.log(assertArraysEqual(middle([1, 2]), [])); // => true

console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => true

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // true

