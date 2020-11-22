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

        it('Should return 3', () => {
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

    describe('Index of the minimum element of the array', () => {
        it('Should return "It is not array', () => {
            const arg = '';
            const expected = 'It is not array';

            const actual = arrays.indexOfArraysMin(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "There is something wrong"', () => {
            const arg = [1, 2, 0, 'm'];
            const expected = 'There is something wrong';

            const actual = arrays.indexOfArraysMin(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return 4', () => {
            const arg = [1, 2, 3, 0, -9];
            const expected = 4;

            const actual = arrays.indexOfArraysMin(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = null ;
            const expected = 'It is not array';

            const actual = arrays.indexOfArraysMin(arg);

            assert.strictEqual(actual, expected);
        });
    });

    describe('Index of the maximum element of the array', () => {
        it('Should return "It is not array', () => {
            const arg = '';
            const expected = 'It is not array';

            const actual = arrays.indexOfArraysMax(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "There is something wrong"', () => {
            const arg = [1, 2, 0, 'm'];
            const expected = 'There is something wrong';

            const actual = arrays.indexOfArraysMax(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return 2', () => {
            const arg = [1, 2, 3, 0, -9];
            const expected = 2;

            const actual = arrays.indexOfArraysMax(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = null ;
            const expected = 'It is not array';

            const actual = arrays.indexOfArraysMax(arg);

            assert.strictEqual(actual, expected);
        });
    });

    describe('Index of the maximum element of the array', () => {
        it('Should return "It is not array', () => {
            const arg = '';
            const expected = 'It is not array';

            const actual = arrays.sumOfUnevenElem(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "There is something wrong"', () => {
            const arg = [1, 2, 0, 'm'];
            const expected = 'There is something wrong';

            const actual = arrays.sumOfUnevenElem(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return 2', () => {
            const arg = [1, 2, 3, 0, -9];
            const expected = 2;

            const actual = arrays.sumOfUnevenElem(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = null ;
            const expected = 'It is not array';

            const actual = arrays.sumOfUnevenElem(arg);

            assert.strictEqual(actual, expected);
        });
    });

    describe('Revers of the array', () => {
        it('Should return "It is not array', () => {
                const arg = '';
                const expected = 'It is not array';

                const actual = arrays.revers(arg);

                assert.strictEqual(actual, expected);
            });

            it('Should return "There is something wrong"', () => {
                const arg = [1, 2, 0, 'm'];
                const expected = 'There is something wrong';

                const actual = arrays.revers(arg);

                assert.equal(actual, expected);
            });

            it('Should return [3, 2, 1]', () => {
                const arg = [1, 2, 3];
                const expected = [3, 2, 1];

                const actual = arrays.revers(arg);

                assert.deepEqual(actual, expected);
            });

            it('Should return "It is not array"', () => {
                const arg = null ;
                const expected = 'It is not array';

                const actual = arrays.revers(arg);

                assert.strictEqual(actual, expected);
            });
        });

    describe('Quantity indexes of the uneven elements of array', () => {
        it('Should return "It is not array', () => {
            const arg = '';
            const expected = 'It is not array';

            const actual = arrays.countUnevenElem(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "There is something wrong"', () => {
            const arg = [1, 2, 0, 'm'];
            const expected = 'There is something wrong';

            const actual = arrays.countUnevenElem(arg);

            assert.equal(actual, expected);
        });

        it('Should return 3', () => {
            const arg = [-9, 0, 3, 2, 1];
            const expected = 3;

            const actual = arrays.countUnevenElem(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = null ;
            const expected = 'It is not array';

            const actual = arrays.countUnevenElem(arg);

            assert.strictEqual(actual, expected);
        });
    });

    describe('Sorting an array', () => {
        it('Should return "It is not array', () => {
            const arg = '';
            const expected = 'It is not array';

            const actual = arrays.sortingBubble(arg);

            assert.strictEqual(actual, expected);
        });

        it('Should return "There is something wrong"', () => {
            const arg = [1, 2, 0, 'm'];
            const expected = 'There is something wrong';

            const actual = arrays.sortingBubble(arg);

            assert.equal(actual, expected);
        });

        it('Should return [-9, 0, 1, 2]', () => {
            const arg = [1, 2, 0, -9];
            const expected = [-9, 0, 1, 2];

            const actual = arrays.sortingBubble(arg);

            assert.deepEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = null ;
            const expected = 'It is not array';

            const actual = arrays.sortingBubble(arg);

            assert.deepEqual(actual, expected);
        });

        it('Should return "It is not array"', () => {
            const arg = 1 ;
            const expected = 'It is not array';

            const actual = arrays.sortingBubble(arg);

            assert.deepEqual(actual, expected);
        });
    });
});