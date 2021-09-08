const container = document.getElementById('container');

function makeCard(image, text, id) {
    const card = document.createElement('div');
    const cardImg = document.createElement('div');
    const img = document.createElement('img');
    const description = document.createElement('div');

    card.className = 'card';
    cardImg.className = 'card__img';
    description.className = 'card__description';

    img.src = image;
    img.setAttribute('data-id', id)
    description.innerText = text;

    cardImg.append(img);
    card.append(cardImg);
    card.append(description);
    container.append(card);
}

function idToLocalStorage(event) {
    const id = event.target.getAttribute('data-id');
    let storage = localStorage.getItem('id');
    if (storage) {
        storage += ` ${id}`;
        localStorage.setItem('id', storage);
    } else {
        localStorage.setItem('id', id);
    }
}

function arrayOfFavorites() {
    const storage = localStorage.getItem('id');
    const arr = storage.split(' ');
    return arr.filter((elem, index, a) => a.indexOf(elem) === index);
}

const getBeersData = fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6');

getBeersData
    .then(resp => resp.json())
    .then(resp => resp.forEach(elem => makeCard(elem.image_url, elem.description, elem.id)))
    .then(() => {
        let images = document.body.getElementsByTagName('img');
        for (let img of images) {
            img.addEventListener('click', idToLocalStorage);
        }
    })
    .catch(error => console.log(error));