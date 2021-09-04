/***** Task 1 *****/

const div = document.createElement('div');
div.innerText = 'Click';
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



/***** Task 5 *****/



/***** Task 6 *****/



/***** Task 7 *****/