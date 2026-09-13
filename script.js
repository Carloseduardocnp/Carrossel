let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');
let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

let isAnimating = false;

btnNext.onclick = () => moverItemsOnClick('next');
btnBack.onclick = () => moverItemsOnClick('back');

function moverItemsOnClick(type) {
    if (isAnimating) return; // Trava o clique se uma animação estiver em andamento
    isAnimating = true;

    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if (type === 'next') {
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next');
    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('back');
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
        isAnimating = false; // Libera novos cliques após o término da animação
    }, 500); // 500ms é o tempo exato das animações do CSS
}