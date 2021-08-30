/***** Task 1 *****/

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

console.log(vegetables.join(' | '))

/***** Task 2 *****/

let names = 'Вася;Петя;Вова;Олег';

let newNames = names.split(';');

console.log(newNames);

/***** Task 3 *****/

function hello2(name = 'гость') {
    return `Привет, ${name}`;
}

console.log(hello2());

console.log(hello2('Alex'));

/***** Task 4 *****/

const fruits = ['яблоко', 'ананас', 'груша'];

const fruitsInUpperCase = fruits.map(item => item.toUpperCase());

console.log(fruitsInUpperCase);

/***** Task 5 *****/

function addOneForAll(...arguments) {
    return arguments.map(item => item + 1);
}

const val = addOneForAll(1, 2, 3, 4);

console.log(val);

/***** Task 6 *****/

function getSum(...arguments) {
    return arguments.reduce((acc, item) => acc + item)
}

const val2 = getSum(1, 2, 3, 4);

console.log(val2);

/***** Task 7 *****/

const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

const numberArray = arr.filter(item => typeof item === 'number');

console.log(numberArray);

/***** Task 8 *****/

function arrayTesting(arr) {
    let trigger = arr.some(item => Boolean(item) === true);

    if (trigger === true) {
        return 'Нашли true значение';
    }

    else return 'Ничего нет';
}

const haveTrueValue = arrayTesting([0, false, null, 1]);

const dontHaveTrueValue = arrayTesting([0, false, null, 0]);

console.log(haveTrueValue);

console.log(dontHaveTrueValue);