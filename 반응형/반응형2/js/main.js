const allMenu = document.querySelector('.all-menu');
const nav = document.querySelector('.nav');
const navClose = document.querySelector('.nav .close');

allMenu.addEventListener('click',e => {
    nav.style.right = '0%';
    // allMenu.style.display = 'none';
})

navClose.addEventListener('click',e => {
    nav.style.right = '-100%';
    // allMenu.style.display = 'block';
})

window.addEventListener('resize',e => {
    const width = window.outerWidth;
    if(width > 1023){
        nav.style.right = '0';
    } else {
        nav.style.right = '-100%';
    }
})