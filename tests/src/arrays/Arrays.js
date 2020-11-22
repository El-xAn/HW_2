function arraysMin(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {
        return 'It is not array';
    } else {
        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] !== 'number') {
                return 'There is something wrong';
            } else {
                if (numbers[0] > numbers[i + 1]) {
                    numbers[0] = numbers[i + 1];
                }
            }

        }

        return numbers[0];
    }
};



function arraysMax(numbers) {

     if (!Array.isArray(numbers) || numbers == null) {
            return 'It is not array';
        } else {
            for (let i = 0; i < numbers.length; i++) {

                if (typeof numbers[i] !== 'number') {
                    return 'There is something wrong';
                } else {
                    if (numbers[0] < numbers[i + 1]) {
                        numbers[0] = numbers[i + 1];
                    }
                }

            }

            return numbers[0];
        }
}



function indexOfArraysMin(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {
        return 'It is not array';
    } else {
        let index = 0;

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 1; j < numbers.length; j++) {

                if (typeof numbers[i] !== 'number') {
                    return 'There is something wrong';
                } else if (numbers[0] > numbers[j]) {
                    numbers[0] = numbers[j];
                    index = j;
                }
            }
        }

        return index;
    }
}



function indexOfArraysMax(numbers) {
    if (!Array.isArray(numbers) || numbers == null) {
        return 'It is not array';
    } else {
        let index = 0;

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 1; j < numbers.length; j++) {

                if (typeof numbers[i] !== 'number') {
                    return 'There is something wrong';
                } else if (numbers[0] < numbers[j]) {
                    numbers[0] = numbers[j];
                    index = j;
                }
            }
        }

        return index;
    }
}



function sumOfUnevenElem(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {
        return 'It is not array';
    } else {
        let temp = 0;

        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] != 'number') {

                return 'There is something wrong';
            } else if(i % 2 != 0) {

                temp += numbers[i];
            }
        }

        return temp;
    }
}



function revers(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {

        return 'It is not array';
    } else {
        let temp;

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length / 2; j++) {
                if (typeof numbers[i] !== 'number') {

                    return 'There is something wrong';
                } else {

                    temp = numbers[j];
                    numbers[j] = numbers[numbers.length - 1 - j];
                    numbers[numbers.length - 1 - j] = temp;
                }
            }
        }

        return numbers;
    }
}



function countUnevenElem(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {

        return 'It is not array';
    } else {
        let index = 0;

        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] != 'number') {

                return 'There is something wrong';
            } else {

                if (numbers[i] % 2 != 0) {
                    index++;
                }
            }
        }

        return index;
    }
}



function sortingBubble(numbers) {
    if (!Array.isArray(numbers) || numbers == null) {

        return 'It is not array';
    } else {

        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] !== 'number') {

                return 'There is something wrong';
            } else {
                let temp;

                for (let j = i + 1; j < numbers.length; j++) {
                    if (numbers[i] > numbers[j]) {
                        temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }
                }
            }
        }

        return numbers;
    }
}



module.exports = {
    arraysMin, arraysMax, indexOfArraysMin, indexOfArraysMax, sumOfUnevenElem, revers, countUnevenElem, sortingBubble
};