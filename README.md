# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require(`@conste11ations/lotide`);`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: returns true if array arguments are equal.
* `assertEqual`: returns true if primitive arguments are equal.
* `assertObjectsEqual`: returns true if objects are equal.
* `countOnly`: given an array and key, will return an object of keys that will contain the number of occurrences of that key in the array.
* `eqArrays`: given two arrays as arguments will return true if arrays are equal.
* `eqObjects`: given two objects as arguments, will reutrn true if objects are equal.
* `findkey`: function will find the value of key. takes in an object and a callback function.
* `findKeyByValue`: given an object and the object keys value, will return key name.
* `flatten`: will merge contents of array of array to a single array.
* `head`: will return first item in array
* `letterPositions`: takes in a sentence and will return an object of letters of the string as values and the number of occurrences as values.
* `map`: takes in array and callback function as arguemnts and will replace all instances of the array with what the specific function will return.
* `middle`: takes in array, and will return the value in the middle of array. if array is even, will take the average of the middle two.
* `tail` : takes in array as an argument, returns a new array without the first index of the original.
* `takeUntil`: takes in array and callback function, will parse through array based on function, and return a new array of filtered items.
* `test`: ignore this
* `without`: takes array and value of array as arguemnts, returns a new array that excludes the value given in argument.
* `index`: ignore