//const assert = require('assert');
const AssertionError = require('assert').AssertionError;

// In the requirements, strings seem to have quotation marks, numbers do not.
const numberChecker = function(input) {
  if (typeof input === 'number' || input === undefined) {
    return input;
  } else {
    return '"' + input + '"';
  }
};

const assertEqual = function(actual, expected) {

  // Defining the messages to be printed to console
  const passMsg = `💚🥬📗 Assertion Passed: ${numberChecker(actual)} === ${numberChecker(expected)}`;
  const errorMsg = `🍎🧧🔴 Assertion Failed: ${numberChecker(actual)} !== ${numberChecker(expected)}`;
 

  //try-catch statement to get Assertion Error
  try {
    console.assert(actual === expected);
    console.log(passMsg);
  } catch (e) {
    if (e instanceof AssertionError) {
      console.log(errorMsg);
    }
  }
};

const head = function(array) {
  return (array === undefined) ? undefined : array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([]), 5);
//non-empty array
assertEqual(head(['']), 5);
