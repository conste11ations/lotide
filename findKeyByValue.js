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

//  scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, value) {
  let result;
  for (let item in object) {
    if (object[item] === value) {
      return item;
    }
  }
  return result;
};


// TEST CODE

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  mystery: "Scooby Doo"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "Scooby Doo"), "MYSTERY"); // false because case-sensitive

module.exports = findKeyByValue;

