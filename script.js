/*** Task 1 ***/

// Case 1
{
    const name = 'Alex';
    let message = typeof name === 'string' ? `Hello, ${name}` : `Ошибка, не тот тип данных`;

    console.log(message);
}

// Case 2
{
    const name = 123;
    let message = typeof name === 'string' ? `Hello, ${name}` : `Ошибка, не тот тип данных`;

    console.log(message);
}

/*** Task 2 ***/

console.log(typeof 2);
console.log(typeof 10n);
console.log(typeof 'string');
console.log(typeof true);
console.log(typeof { name: 'Alex' });
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof undefined);