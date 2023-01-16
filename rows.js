const rows = document.querySelectorAll('.row');
const colors = ['green', 'aquamarine', 'yellow', 'orange', 'orangered', 'red'];

const onDragOver = (event) => {
    event.preventDefault();
}

const onDrop = (event) => {
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    const draggedCard = document.getElementById(draggedCardId);
    const targetClass = event.target.classList;
    console.log(targetClass);
    if (targetClass.contains('card')) {
        event.target.parentNode.appendChild(draggedCard);
    }
    else if (targetClass.contains('label')) {
        const data_row_id = event.target.getAttribute('data-row-id');
        const row = document.querySelector(`.row-${data_row_id}`);
        row.appendChild(draggedCard);
    }
    else if (targetClass.contains('row')) {
        event.target.appendChild(draggedCard);
    }
    else if (targetClass.contains('bank')) {
        const bank = document.querySelector('#bank');
        bank.appendChild(draggedCard);
    }
}

rows.forEach((row, index) => {
    const label = row.querySelector('.label');
    label.style.backgroundColor = colors[index];
    row.ondragover = onDragOver;
    row.ondrop = onDrop;
})