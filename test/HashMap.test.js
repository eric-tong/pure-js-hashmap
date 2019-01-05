const HashMap = require('../src/HashMap');
const assert = require('assert');

function shouldReturnFalseForNonExistentKeys() {
    const map = new HashMap();

    actual = map.has("someKey");
    expected = false;

    assert.equal(actual, expected);
}

const tests = [
    shouldReturnFalseForNonExistentKeys
];

tests.forEach(test => test());