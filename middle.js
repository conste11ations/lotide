
const middle = function(array) {
  let pivot = Math.floor(array.length / 2);
  let result = [];

  if (array.length <= 2) {
    return result;
  }  else if (array.length % 2 === 0) {
    result.push(array[pivot - 1]);
    result.push(array[pivot]);
  } else {
    result.push(array[pivot]);
  }
  return result;
};

module.exports = { middle };
