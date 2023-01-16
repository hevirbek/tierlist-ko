const cards = document.querySelectorAll('.card');

/* Add Card Logic */
const addCardToBank = (imagePath) => {
    const card = createCard(imagePath);
    const bank = document.querySelector('#bank');
    bank.appendChild(card);
}

/* Card Logic */
const createCard = (imagePath) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('draggable', 'true');
    card.id = `card-${Math.random()}`;
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
    appendImage(card, imagePath);
    return card;
}

const appendImage = (card, imagePath) => {
    const image = document.createElement('img');
    image.width = 100;
    image.height = 85;
    image.src = imagePath;
    image.style.pointerEvents = 'none';
    image.style.objectFit = 'cover';

    card.appendChild(image);
}

const onDragStart = (event) => {
    console.log('dragging the element');
    event.dataTransfer.setData('id', event.target.id);
    setTimeout(() => {
        event.target.style.visibility = 'hidden';
    }, 50)
}

const onDragEnd = (event) => {
    event.target.style.visibility = 'visible';
    console.log('ended the drag');
}

cards.forEach((card, index) => {
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
})


const listOfImages = [
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/zeyd.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/aybuke.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/yaren.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/tolga.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/erhan.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/cansel.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/kaan.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/erol.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/seyda.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/bilek.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/tugce.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/aysenur.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/yeliz.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/simge.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/ogulcan.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/serdar.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/furkan.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/cagri.webp',
    'https://github.com/hevirbek/tierlist-ko/blob/main/casting/elif.webp',
]


listOfImages.forEach((imagePath) => {
    addCardToBank(imagePath);
})


const download = (event) => {
    const board = document.querySelector('#board');
    html2canvas(board
        , {
            allowTaint: true,
            useCORS: true,
            width: board.offsetWidth,
            height: board.offsetHeight,
            scrollX: 0,
            scrollY: -window.scrollY,
            scale: 4,
        }
    ).then(canvas => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'my-casting.png';
        link.href = dataURL
        link.click();
    });

}

const shareButton = document.querySelector('#download');
shareButton.addEventListener('click', download);