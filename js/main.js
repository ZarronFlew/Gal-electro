// burger menu
let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.mobile-menu');
let body = document.querySelector('body');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    if (burgerMenu.classList.contains('open')) {
        burgerMenu.style.left = '100%';
        burgerMenu.classList.remove('open');
        body.style.overflow = 'auto';
    } else {
        burgerMenu.style.left = '0';
        burgerMenu.classList.add('open');
        body.style.overflow = 'hidden';
    }
})

let menu = document.querySelector('.nav');
const headerNav = menu.querySelectorAll('[data-scroll]');
headerNav.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.scroll);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const burgerNav = burgerMenu.querySelectorAll('[data-scroll]');
burgerNav.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        if (burgerMenu.classList.contains('open')) {
            burgerMenu.style.left = '100%';
            burgerMenu.classList.remove('open');
            body.style.overflow = 'auto';
        } else {
            burgerMenu.style.left = '0';
            burgerMenu.classList.add('open');
            body.style.overflow = 'hidden';
        }
        const target = document.getElementById(link.dataset.scroll);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// faq
let faq = document.querySelector('.faq');
let card = faq.querySelectorAll('.card');

card.forEach(item => {
    item.addEventListener('click', () => {
        cardOpen(item)
    })
})

function cardOpen(card) {
    let p = card.querySelector('p')
    if (p.classList.contains('open')) {
        openCloseCard(p)
    } else {
        closeAllCards(card);
        openCloseCard(p)
    }
}
function openCloseCard(p) {
    p.classList.toggle('open')
}
function closeAllCards(card) {
    let allParagraphs = card.parentElement.querySelectorAll('p')
    allParagraphs.forEach(item => {
        item.classList.remove('open')
    })
}

// Swiper

var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1140: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
})
