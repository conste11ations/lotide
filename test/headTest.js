const assertEqualLib = require('../assertEqual');
const headLib = require('../head');
const assertEqual = assertEqualLib.assertEqual;
const head = headLib.head;

assertEqual(head([5, 4, 3]), 5);
assertEqual(head(["apple"]), "apple");