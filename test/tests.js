import './functions.test.js';

const { test } = QUnit;
test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = myFunction('bunny rabbit');
    expect.equal(actual, expected, 'bunny rabbit');
});