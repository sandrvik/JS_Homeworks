/**** Task1 ****/

const me = {
    name: 'Alex',
    age: 29,
}

function objToArrOfStrings(object, sign) {
    let arr = [];

    for (let key in object) {
        arr.push(`${key}${sign}${object[key]}`)
    }

    return arr;
}

const arrayForCookies = objToArrOfStrings(me, '=');

arrayForCookies.forEach(element => document.cookie = element);

console.log(document.cookie)

/**** Task2 ****/

const birth = document.getElementById('birthday');
const submit = document.getElementById('submit');
const timeToBirthday = document.getElementById('toBirthday');
const birthdayDiv = document.getElementById('task2');

const nextYear = new Date().getFullYear() + 1;
const thisYear = new Date().getFullYear();

function nextBirthday(dateOfBirth) {
    if ((dateOfBirth.setFullYear(thisYear) - new Date()) < 0) {
        return dateOfBirth.setFullYear(nextYear)
    } else {
        return dateOfBirth.setFullYear(thisYear)
    }
}

function convertMsToTime(milliSeconds) {

    let days = Math.floor(milliSeconds / (86400 * 1000));
    milliSeconds -= days * (86400 * 1000);

    let hours = Math.floor(milliSeconds / (60 * 60 * 1000));
    milliSeconds -= hours * (60 * 60 * 1000);

    let minutes = Math.floor(milliSeconds / (60 * 1000));
    milliSeconds -= minutes * (60 * 1000);

    let seconds = Math.floor(milliSeconds / 1000);

    return {
        days, hours, minutes, seconds
    }
}

function timeUntilNextBirthday(dateOfBirth) {
    dateOfNextBirthday = nextBirthday(dateOfBirth);
    msToBirthday = dateOfNextBirthday - new Date();
    const arrayOfTimes = (objToArrOfStrings(convertMsToTime(msToBirthday), ': '));
    const stringOfTimes = arrayOfTimes.reduce((acc, item) => {
        return acc += `${item} | `;
    }, '');
    return stringOfTimes;
}

let dateOfBirth = new Date(localStorage.getItem('Date of Birth'));
let dateOfNextBirthday;
let msToBirthday;

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('Date of Birth')) {
        submit.addEventListener('click', () => {
            dateOfBirth = new Date(birth.value);
            dateOfBirth.setHours(0);
            localStorage.setItem('Date of Birth', dateOfBirth);
        })
    } else {
        birthdayDiv.innerText = timeUntilNextBirthday(dateOfBirth);
    }
})


/**** Task3 ****/

const textarea = document.getElementById('txt');

function setFieldFromStorage(field, item) {
    const textForInput = localStorage.getItem(field);
    if (textForInput) item.value = textForInput;
}

setFieldFromStorage('TextForInput', textarea);


textarea.addEventListener('blur', (e) => {
    localStorage.setItem('TextForInput', e.target.value);
})

/**** Task4 ****/

function insertItemsInArray(arr, obj) {
    for (let item in obj) {
        arr.splice(obj[item], 0, item)
    }
}

let array = [1, 2, 3, 4, 5];

const itemsPosition = {
    'a': 1,
    'b': 2,
    'c': 6,
    'e': 8
}

insertItemsInArray(array, itemsPosition);

console.log(array) // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']