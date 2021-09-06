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



/***** Task 3 *****/



/***** Task 4 *****/



/***** Task 5 *****/