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
module.exports = assertEqual;
