const eqArrayslib = require('./eqArrays');
const eqArrays = eqArrayslib.eqArrays;

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log("💚🥬📗 Assertion Passed: ", actual, " === ", expected);
  } else {
    console.log("🍎🧧🔴 Assertion Failed: ", actual, " !== ", expected);
  }
};

module.exports = assertArraysEqual;
