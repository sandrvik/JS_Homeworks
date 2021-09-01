/***** Task 1 *****/

function getCity(obj) {
    const arr = Object.entries(obj);

    return arr.reduce((acc, city) => {
        let str = `${city[0]} - это ${city[1]}`;
        return [...acc, str];
    }, [])
}

const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const result = getCity(citiesAndCountries);

console.log(result);

/***** Task 2 *****/

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};

function getNameOfDay(lang, datNumber) {
    return namesOfDays[lang][datNumber - 1];
}

const friday = getNameOfDay('ru', 5);
const sunday = getNameOfDay('en', 7);

console.log(friday);
console.log(sunday);

/***** Task 3 *****/

function setProto(currentObj, protoObj) {
    currentObj.__proto__ = protoObj;
}

const person1 = {
    name: 'Vlad'
};


const person2 = {
    age: 1
};

setProto(person2, person1);

console.log(person2.name);

/***** Task 4 *****/

let person = {
    setName: function (name) {
        this.name = name;
    },

    getName: function () {
        console.log(this.name);
    },

    setAge: function (age) {
        this.ageValidation(age) ? this.age = age : this.age = 'Validation Error';
    },

    getAge: function () {
        console.log(this.age);
    },

    ageValidation: function (age) {
        return (age < 18) ? false : true;
    }
};

let person3 = {};

Object.setPrototypeOf(person3, person);

person3.setName('Alex');
person3.setAge(28);
person3.getName(); // 'Alex'
person3.getAge(); // 28
person3.setAge(12);
person3.getAge(); // 'Validation Error'