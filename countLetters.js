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

/*
The function should take in a sentence (as a string) and then
return a count of each of the letters in that sentence.
*/

const countLetters = function(sentence) {
  let result = {};
  for (let char of sentence) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  delete result[" "];
  return result;
};

// TEST CODE
const testStr = "I am a testy string";
const result1 = countLetters(testStr);
console.log(result1);

assertEqual(result1["t"], 3); //true
assertEqual(result1["i"], 1); //true
assertEqual(result1["I"], 1); //true
assertEqual(result1["a"], 2); //true
assertEqual(result1["m"], 1); //true

module.exports = countLetters;