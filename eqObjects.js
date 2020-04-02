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

// TEST CODE
const ab = { a: "1", b: "2" };

const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // pass

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // pass

const empty = {};
assertEqual(eqObjects(ba, empty), false); // pass

assertEqual(eqObjects(empty, {}), true); // pass
assertEqual(eqObjects(empty, undefined), false); // pass
assertEqual(eqObjects(undefined, undefined), false); // I think this should return false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
