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



/***** Task 4 *****/



/***** Task 5 *****/