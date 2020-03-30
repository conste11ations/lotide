//const assert = require('assert');
const AssertionError = require('assert').AssertionError;

// In the requirements, strings seem to have quotation marks, numbers do not.
const numberChecker = function(input) {
  if (typeof input === 'number') {
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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(0, 1);
assertEqual("10", 10);
assertEqual(1.1, "Hi");
assertEqual("red", "red");