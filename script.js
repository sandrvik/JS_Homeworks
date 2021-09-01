/***** Task 1 *****/

function bindFunc(fn, ctx, ...args) {
    const bindedFunc = fn.bind(ctx, ...args)
    return bindedFunc;
}

let obj = {
    a: 1,
    b: 2
}

function addToA(x, y, z) {
    return this.a + x + y + z;
}

let bindedAddToA = bindFunc(addToA, obj, 5, 10, 20);

console.log(bindedAddToA());  // 36

/***** Task 2 *****/

function sumValues() {
    const values = Object.values(this);

    return values.reduce((acc, item) => {
        if (isNaN(item) || item <= 0) {
            return acc;
        }

        return acc + item;
    }, 0)
}

let testobj = {
    a: -5,
    b: 0,
    c: 5,
    d: -2,
    e: 'some text',
    f: 12
}

console.log(sumValues.apply(testobj)) // 17

/***** Task 3 *****/

function getNewArray() {
    if (Array.isArray(this.values)) {
        return this.values.filter(myFilter)
    }

    console.log('Не найдено')
}

function myFilter(item) {
    if ((typeof item === 'number') && (2 < item && item < 10) && (item % 2 === 0)) {
        return true
    }
    else return false
}

const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false],
}

let newarrr = getNewArray.call(valObject0);
console.log(newarrr)