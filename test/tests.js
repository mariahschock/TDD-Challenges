import './functions.test.js';
//import { myFunction } from '../functions.js';
import { addExclamationPoints } from '../functions.js';
import { multiplyBySeven } from '../functions.js';
import { multiplyBy12ThenHalve } from '../functions.js';
import { divideThenMultiply } from '../functions.js';
import { returnAsAnArray } from '../functions.js';

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

//Question 3

test('this function should multiply a number by 7', (expect) => {
    const expected = '28';
    const actual = multiplyBySeven(4);
    expect.equal(actual, expected);
});

//Question 4

test ('this function should take a number * by 12 and half', (expect) => {
    const expected = '10';
    const actual = multiplyBy12ThenHalve(8, 4, 5);
    expect.equal(actual, expected);
});

//Question 5

test ('this function should take in three numbers and return a product', (expect) => {
    const expected = 10;
    const actual = divideThenMultiply(8, 4, 5);
    expect.equal(actual, expected);
});

//Question 6 

test ('this function should take 3 numbers and return as a string', (expect) => {
    const expected = '845';
    const actual = returnAsAnArray(8, 4, 5);
    expect.deepEqual(actual, expected);
});