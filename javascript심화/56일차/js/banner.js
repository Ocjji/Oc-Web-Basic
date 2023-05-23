const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let timer = null;
let interval = 5000;

let auto = true;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
}; // end nestSlide
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'), 200);
}; // end prevSlide

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(timer);
        timer = setInterval(nextSlide, interval);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(timer);
        timer = setInterval(nextSlide, interval);
    }
});

if (auto) {
    timer = setInterval(nextSlide, interval);
}