const { assert } = require('chai');
const operators = require('../Operators.js');

describe('Operators describe', () =>{

    it ('first test', () => {
        const arg = 23;
        const expected = 'E';

        const actual = operators.rating(arg);

        assert.strictEqual(actual, expected);
    });
});