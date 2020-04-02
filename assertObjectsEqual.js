
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// i.e. take in two objects and returns true or false, based on a perfect match.
const eqObjects = function(object1, object2) {
  // if both objects exist and have the same # of properties
  if (!object1 || !object2 || Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let [key, value] of Object.entries(object1)) {
      if (Array.isArray(value)) { // if this is an array comparison
        if (!eqArrays(value, object2[key])) { // if the arrays are equal
          return false; 
        }
       } else { // primitive type
        if (!(value === object2[key])) {
          return false;
        }
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
   eqObjects(actual, expected) ? 
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);    
};

//TEST CODE
const ab = { a: "1", b: "2" };

const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // false

const empty = {};
assertObjectsEqual(ba, empty); // false

assertObjectsEqual(empty, {}); // true
assertObjectsEqual(empty, undefined) // false
assertObjectsEqual(undefined, undefined) // I think this should return false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd2, cd); // => false
