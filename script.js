/***** Task 1 *****/

function removeUser(arr, n) {
    arr.splice(n, 1);
    return arr;
}

const users = ['Vasya', 'Petya', 'Alexey'];
removeUser(users, 1) // ['Vasya', 'Alexey']

/***** Task 2 *****/

function makeDiv(colour, destination) {
    const div = document.createElement('div');
    div.classList = `square ${colour}`;
    destination.append(div);
}

makeDiv('blue', sq_container);
makeDiv('red', sq_container);
makeDiv('green', sq_container);

/***** Task 3 *****/

function addItems(n, className, destination) {
    for (let item = 1; item <= n; item++) {
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = item;
        destination.append(div);
    }
}

const holder = document.getElementById('holder');

addItems(5, 'item', holder);

/***** Task 4 *****/

function sampleFunc() {
    console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
}

function modificator(fn) {
    return function () {
        fn('test', 'sample');
    }
}

const testFunc = modificator(sampleFunc);
testFunc();

/***** Task 5 *****/

const group = [
    {
        name: "Alex",
        lastName: "Dubovyk",
        age: 28,
        notebook: true,
    },

    {
        name: "John",
        lastName: "Deer",
        age: 34,
        notebook: false,
    },

    {
        name: "Ted",
        lastName: "Philips",
        age: 20,
        notebook: true,
    },
];

function objectToString() {
    let entries = Object.entries(this);

    return entries.reduce((acc, item, index, arr) => {
        if (index === arr.length - 1) {
            return acc + `${item[0]} - ${item[1]} | `;
        } else return acc + `${item[0]} - ${item[1]}, `;
    }, '')
}

function setEnumProp(obj, propName, propVal) {
    Object.defineProperty(obj, propName, {
        value: propVal,
        configurable: true
    })
}

for (let student of group) {
    setEnumProp(student, 'toString', objectToString)
}


function getStudentsList(arrayOfStudents) {
    return arrayOfStudents.reduce((str, student) => {
        return str + student.toString()
    }, '')
}

console.log(getStudentsList(group))