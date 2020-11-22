const { assert } = require('chai');
const operators = require('../Operators.js');

describe('Operators', () => {

    describe('Checking numbers is even or not', () => {

        it ('Should return "Wrong input"', () => {
            const arg = ('a', 5);
            const expected = 'Wrong input';

            const actual = operators.checkNumber(arg);

            assert.strictEqual(actual, expected);
        });

        it ('Should return "Wrong input"', () => {
            const arg = (5, 'b');
            const expected = 'Wrong input';

            const actual = operators.checkNumber(arg);

            assert.strictEqual(actual, expected);
        });

        it ('Should return 7', () => {
            const arg1 = 5;
            const arg2 = 2;
            const expected = 7;

            const actual = operators.checkNumber(arg1, arg2);

            assert.equal(actual, expected);
        });

        it ('Should return 12', () => {
            const arg1 = 6;
            const arg2 = 2;
            const expected = 12;

            const actual = operators.checkNumber(arg1, arg2);

            assert.equal(actual, expected);
        });
    });

    describe('Checking coordinates', () => {

        it ('Should return "Wrong input"', () => {
            const arg = ('x', 9);
            const expected = 'Wrong input';

            const actual = operators.coordinates(arg);

            assert.strictEqual(actual, expected);
        });

        it ('Should return "Wrong input"', () => {
            const arg = (0, 'y');
            const expected = 'Wrong input';

            const actual = operators.coordinates(arg);

            assert.strictEqual(actual, expected);
        });

        it ('Should return "The point belongs 1st quarter."', () => {
            const arg1 = 2;
            const arg2 = 8;
            const expected = 'The point belongs 1st quarter.';

            const actual = operators.coordinates(arg1, arg2);

            assert.deepEqual(actual, expected);
        });

        it ('Should return "The point belongs 3rd quarter."', () => {
            const arg1 = -7;
            const arg2 = -13;
            const expected = 'The point belongs 3rd quarter.';

            const actual = operators.coordinates(arg1, arg2);

            assert.strictEqual(actual, expected);
        });
    });

    describe('Find the sums of only positives of three numbers', () => {

        it ('Should return "Wrong input"', () => {
            const arg1 = 'a';
            const arg2 = 3;
            const arg3 = 6;
            const expected = 'Wrong input';

            const actual = operators.sumsPositive(arg1, arg2, arg3);

            assert.deepEqual(actual, expected);
        });

        it ('Should return "Wrong input"', () => {
            const arg1 = 6;
            const arg2 = 'b';
            const arg3 = -9;
            const expected = 'Wrong input';

            const actual = operators.sumsPositive(arg1, arg2, arg3);

            assert.deepEqual(actual, expected);
        });

        it ('Should return "Wrong input"', () => {
            const arg = ('a', 'b', 'c');
            const expected = 'Wrong input';

            const actual = operators.sumsPositive(arg);

            assert.deepEqual(actual, expected);
        });

        it ('Should return 11', () => {
            const arg1 = 6;
            const arg2 = 5;
            const arg3 = -9;
            const expected = 11;

            const actual = operators.sumsPositive(arg1, arg2, arg3);

            assert.deepEqual(actual, expected);
        });

    });

    describe('Calculate max expression', () => {

        it ('Should return "Expressions are equal."', () => {
            const arg1 = 1;
            const arg2 = 2;
            const arg3 = 3;
            const expected = 'Expressions are equal.';

            const actual = operators.calcMax(arg1, arg2, arg3);

            assert.deepEqual(actual, expected);
        });

        it ('Should return 13', () => {
            const arg1 = 1;
            const arg2 = 2;
            const arg3 = 5;
            const expected = 13;

            const actual = operators.calcMax(arg1, arg2, arg3);

            assert.deepEqual(actual, expected);
        });

        it ('Should return 10', () => {
            const arg1 = 1;
            const arg2 = 1;
            const arg3 = 5;
            const expected = 10;

            const actual = operators.calcMax(arg1, arg2, arg3);

            assert.deepEqual(actual, expected);
        });

        it ('Should return "Wrong input"', () => {
            const arg1 = 1;
            const arg2 = 'l';
            const arg3 = 5;
            const expected = 'Wrong input';

            const actual = operators.calcMax(arg1, arg2, arg3);

            assert.strictEqual(actual, expected);
        });
    });

    describe('Calculate max expression', () => {

        it ('Should return "Wrong input"', () => {
            const arg = '';
            const expected = 'Wrong input';

            const actual = operators.rating(arg);

            assert.deepEqual(actual, expected);
        });

        it ('Should return "E"', () => {
            const arg = 25;
            const expected = 'E';

            const actual = operators.rating(arg);

            assert.deepEqual(actual, expected);
        });

        it ('Should return "Wrong input"', () => {
            const arg = -95;
            const expected = 'Wrong input';

            const actual = operators.rating(arg);

            assert.deepEqual(actual, expected);
        });

        it ('Should return "B"', () => {
            const arg = 77;
            const expected = 'B';

            const actual = operators.rating(arg);

            assert.deepEqual(actual, expected);
        });
    });
});