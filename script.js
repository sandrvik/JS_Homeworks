/***** Task 1 *****/

function fibo(n) {
    if (n <= 1) {
        return n
    } else return fibo(n - 1) + fibo(n - 2)
}

function fiboFast(n) {
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/***** Task 2 *****/

function sumOfDigits(n) {
    if (n <= 0) {
        return n;
    } else return n + sumOfDigits(n - 1);
}

function sumOfDigitsFast(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}

/***** Task 3 *****/

function printNumbers(from, to) {
    setTimeout(function show() {
        console.log(from);
        if (from !== to) {
            --from;
            setTimeout(show, 1000);
        }
    });
}

function printNumbers2(from, to) {
    let id = setInterval(() => {
        if (from < to) {
            clearInterval(id);
        } else {
            console.log(from);
            from--;
        }
    }, 1000);
}

/***** Task 4 *****/



/***** Task 5 *****/