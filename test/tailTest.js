const assert = require('chai').assert;
const assertEqualLib = require('../assertEqual');
const tailLib = require('../tail');
const assertEqual = assertEqualLib.assertEqual;
const tail = tailLib.tail;


describe("#tail", () => {
  it("returns 'Lighthouse,Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).toString(), `${words[1]},${words[2]}`);
  });
});

