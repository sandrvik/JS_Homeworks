/**** Task1 ****/

const me = {
    name: 'Alex',
    age: 29
}

function objToStrings(object) {
    let arr = [];
    for (let key in object) {
        arr.push(`${key}=${object[key]}`)
    }
    return arr;
}

const arrayForCookies = objToStrings(me);

arrayForCookies.forEach(element => document.cookie = element);

console.log(document.cookie)

/**** Task2 ****/



/**** Task3 ****/



/**** Task4 ****/