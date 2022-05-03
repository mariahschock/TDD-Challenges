import './functions.test.js';
//import { myFunction } from '../functions.js';
import { addExclamationPoints } from '../functions.js';

const { test } = QUnit;

//Question 1

// test('this test should return string name with hi + name', (expect) => {
//     const expected = 'hi kashi!';
//     const actual = myFunction('kashi');

//     expect.equal(actual, expected, 'kashi');
// });



//Question 2

test('this test should return word with 3 exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');
    expect.equal(actual, expected);
});

