// Case 1
{
    const name = 'Alex';
    let message = (typeof (name) === 'string') ? `Hello, ${name}` : `Ошибка, не тот тип данных`;

    console.log(message);
}

// Case 2
{
    const name = 123;
    let message = (typeof (name) === 'string') ? `Hello, ${name}` : `Ошибка, не тот тип данных`;

    console.log(message);
}
