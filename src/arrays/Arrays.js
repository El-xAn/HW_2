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
        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] != 'number') {
                return 'There is something wrong';
        }

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[0] < numbers[i]) {
                numbers[0] = numbers[i];
                index = i;
            }
        }

        return index;
        }
    }
}



function indexOfArraysMax(numbers) {
    let index;
    for(let i = 1; i < numbers.length; i++) {
        if (numbers[0] < numbers[i]) {
            numbers[0] = numbers[i];
            index = i;
        }
    }
         return index;
}




function sumOfUnevenElem(numbers) {

    for(let i = 3; i < numbers.length; i += 2) {
        numbers[1] += numbers[i];
    }
         return numbers[1];
}



function revers(numbers) {
    let temp;

    for (let i = 0; i < numbers.length / 2; i++) {
        temp = numbers[i];
        numbers[i] = numbers[numbers.length - 1 - i];
        numbers[numbers.length - 1 - i] = temp;
    }

    return numbers;
}



function countUnevenElem(numbers) {
    let index = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            index++;
        }
    }
    return index;
}





function sortingBubble(numbers) {
    let temp;

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

    return numbers;
}

console.log(indexOfArraysMin([-96, 1, 2, -100, 3, -9, 0]));
console.log(indexOfArraysMin([1, 2, '3', -9, 'm']));
console.log(indexOfArraysMin(null));
console.log(indexOfArraysMin('salam'));
console.log(indexOfArraysMin(''));




//module.exports = {
//    arraysMin, arraysMax,
//};