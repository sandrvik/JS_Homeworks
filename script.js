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



/***** Task 3 *****/



/***** Task 4 *****/



/***** Task 5 *****/



/***** Task 6 *****/



/***** Task 7 *****/