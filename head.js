const lib = require('./assertEqual.js');
const assertEqual = lib.assertEqual;

const head = function(array) {
  return (array === undefined) ? undefined : array[0];
};

module.exports = { head };