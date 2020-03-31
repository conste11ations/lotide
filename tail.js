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

const tail = function(array) {
  return (array === undefined) ? undefined : array.slice(1, array.length);
};

// TEST CODE

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(tail(words).toString(), `${words[1]},${words[2]}`); //true
assertEqual(tail(words).toString(), "Lighthouse, Labs"); //false
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.toString(), "Yo Yo,Lighthouse,Labs"); //true