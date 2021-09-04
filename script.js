/***** Task 1 *****/

const div = document.createElement('div');
div.innerText = 'Click to show image';
document.body.append(div);

const img = document.createElement('img');
img.src = 'https://overcoder.net/img/1/17/1/160042.png';

let id;
let size = 100;

function makeBigger(speed, maxSize) {
    if (size < 200) {
        id = setInterval(() => {
            size++;
            if (img.style.width === `${maxSize}px`) {
                clearInterval(id);
            }
            img.style.width = `${size}px`
        }, speed);
    }
}

div.addEventListener('click', () => document.body.append(img));
img.addEventListener('click', (e) => e.target.remove());

img.addEventListener('mouseover', () => makeBigger(20, 200));
img.addEventListener('mouseout', () => clearInterval(id));

/***** Task 2 *****/

const arr = [1, 2, 3, 0, 4, 5, 6];

function sumFromEndtoZero(array) {
    const newArr = [...array].reverse();
    let count = 0;

    for (let item of newArr) {
        if (item === 0) {
            break;
        } else count = count + item;
    }
    return count;
}

console.log(sumFromEndtoZero(arr)); // 15

/***** Task 3 *****/

const arr2 = [4, 3, 3, 5, 14];

function sumOver(arr, num) {
    let sum = 0;
    let currentIndex;
    for (let [index, value] of arr.entries()) {
        sum += value;
        if (sum > num) {
            currentIndex = index + 1;
            break;
        }
    }
    return currentIndex;
}

console.log(sumOver(arr2, 10)) // 4

/***** Task 4 *****/

const inp = document.getElementById('inp');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => console.log(inp.value))

/***** Task 5 *****/

let hrefs = document.getElementsByTagName('a');
let span = document.createElement('span');

function showHref(lnk) {
    span.innerText = ` (${lnk.href})`;
    lnk.append(span);
}
for (let link of hrefs) {
    link.addEventListener('mouseover', (e) => showHref(e.target));
    link.addEventListener('mouseout', () => span.remove())
}

/***** Task 6 *****/

const btn2 = document.getElementById('btn2');
const div2 = document.getElementById('div2');

btn2.addEventListener('click', () => {
    div2.remove();
})

/***** Task 7 *****/

const px = document.getElementById('px');
const startBtn = document.getElementById('start');
const circle = document.getElementById('circle');

function inputCheckNum(input) {
    if (!Number.isInteger(+input.value)) {
        input.value = '';
    }
}

function moveFigure(figure, px) {
    if (!figure.style.left) {
        figure.style.left = '0px'
    }
    const currPos = Number.parseInt(figure.style.left);
    const destPos = currPos + px;
    figure.style.left = `${destPos}px`;
}

function smoothMove(figure, px, speed) {
    let interval = setInterval(() => {
        if (figure.style.left === `${px}px`) {
            clearInterval(interval);
        } else moveFigure(figure, 1)
    }, speed)
}

function checkIfOver(elem, obj) {
    return (obj.max < +elem.value || obj.min > elem.value);
}

px.addEventListener('input', (e) => {
    startBtn.removeAttribute('disabled');
    inputCheckNum(e.target)
})

startBtn.addEventListener('click', () => {
    circle.style.left = '0px';
    if (checkIfOver(px, { min: 0, max: 600 })) {
        px.value = 'ERROR';
        startBtn.setAttribute('disabled', 'disabled');
    } else smoothMove(circle, +px.value, 10);
})
