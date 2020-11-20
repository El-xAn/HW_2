const { assert } = require ('chai');
const arrays = require('../Arrays.js');

describe('ARRAYS', () => {
    describe('Arrays minimum', () => {
        it('Should return "It is not array', () => {
            const arg = '';
            const expected = 'It is not array';

            const actual = arrays.arraysMin(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "There is something wrong"', () => {
            const arg = [1, 2, 'm'];
            const expected = 'There is something wrong';

            const actual = arrays.arraysMin(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return -9', () => {
            const arg = [1, 2, 3, 0, -9];
            const expected = -9;

            const actual = arrays.arraysMin(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = null ;
            const expected = 'It is not array';

            const actual = arrays.arraysMin(arg);

            assert.strictEqual(actual, expected);
        });
    });

    describe('Arrays maximum', () => {
        it('Should return "It is not array', () => {
            const arg = '';
            const expected = 'It is not array';

            const actual = arrays.arraysMax(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "There is something wrong"', () => {
            const arg = [1, 2, 'm'];
            const expected = 'There is something wrong';

            const actual = arrays.arraysMax(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "3"', () => {
            const arg = [1, 2, 3, 0, -9];
            const expected = 3;

            const actual = arrays.arraysMax(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = null ;
            const expected = 'It is not array';

            const actual = arrays.arraysMax(arg);

            assert.strictEqual(actual, expected);
        });
    });
});