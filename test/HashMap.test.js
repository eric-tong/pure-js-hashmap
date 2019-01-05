const HashMap = require('../src/HashMap');
const assert = require('assert');

function shouldReturnFalseForNonExistentKeys() {
    const map = new HashMap();

    actual = map.has('foo');
    expected = false;

    assert.equal(actual, expected);
}

function shouldReturnTrueForExistentKeys() {
    const map = new HashMap();

    map.set('foo', 'bar');
    actual = map.has('foo');
    expected = true;

    assert.equal(actual, expected);
}

function shouldReturnValueForExistentKeys() {
    const map = new HashMap();

    map.set('foo', 'bar');
    actual = map.get('foo');
    expected = 'bar';

    assert.equal(actual, expected);
}

function shouldReturnLatestForRepeatKeys() {
    const map = new HashMap();

    map.set('foo', 'bar');
    map.set('foo', 'baz')
    actual = map.get('foo');
    expected = 'baz';

    assert.equal(actual, expected);
}

function shouldReturnUndefinedForDeletedKeys() {
    const map = new HashMap();

    map.set('foo', 'bar');
    map.delete('foo');
    actual = map.get('foo');
    expected = undefined;

    assert.equal(actual, expected);
}

function shouldRemoveAllKeysOnClear() {
    const map = new HashMap();

    map.set('foo', 'foo');
    map.set('bar', 'bar');
    map.set('baz', 'baz');
    map.clear();
    actual = map.get('foo') || map.get('bar') || map.get('baz');
    expected = undefined;

    assert.equal(actual, expected);
}

const tests = [
    shouldReturnFalseForNonExistentKeys,
    shouldReturnTrueForExistentKeys,
    shouldReturnValueForExistentKeys,
    shouldReturnLatestForRepeatKeys,
    shouldReturnUndefinedForDeletedKeys,
    shouldRemoveAllKeysOnClear
];

tests.forEach(test => {
    try {
        test();
        console.log(test.name, '\tPassed');
    } catch (e) {
        console.error(e);
    }
});