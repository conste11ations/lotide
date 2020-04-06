const assertEqualLib = require('../assertEqual');
const tailLib = require('../tail');
const assertEqual = assertEqualLib.assertEqual;
const tail = tailLib.tail;

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(tail(words).toString(), `${words[1]},${words[2]}`); //true
assertEqual(tail(words).toString(), "Lighthouse, Labs"); //false
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.toString(), "Yo Yo,Lighthouse,Labs"); //true