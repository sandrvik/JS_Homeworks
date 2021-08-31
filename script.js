/***** Task 1 *****/

function userSumOfSquares() {
    function sumOfSquares(number) {
        let sum = 0;

        for (let current = 1; current <= number; current++) {
            sum += current ** 2;
        }

        console.log(sum);
    }

    let userNum = +prompt('Type a number');

    if (isNaN(userNum)) {
        console.log('Incorrect input. Type a number');
    }
    else {
        sumOfSquares(userNum);
    }
}

userSumOfSquares();

/***** Task 2 *****/

let sumOfFilteredArr = [3, 5, 12, 9, 23, 93, 17]
    .filter((item) => item > 2 && item < 20)
    .reduce((acc, item) => acc + item)

console.log(sumOfFilteredArr)

/***** Task 3 *****/

let arr = [[1, 6, 3, '6'], [10, 15, 13, '10']];

let result = arr.flat()
    .filter((item) => typeof item === 'number')
    .reduce((acc, item) => acc + item);

console.log(result)

/***** Task 4 *****/

let object = {
    a: 1,
    b: 2,
    c: 3
}

function addEntryInObj(key, value, obj) {
    obj.hasOwnProperty(key) ? console.log('Уже есть') : obj[key] = value;
}

addEntryInObj('b', 5, object); // 'Уже есть'
addEntryInObj('d', 4, object); // Property will be added in object