'use strict';



const bannerLi = document.querySelectorAll('.main-banner li');
const pagingLi = document.querySelectorAll('.paging li');
const btnNext = document.querySelector('.btn-wrap .next');
const btnPrev = document.querySelector('.btn-wrap .prev');
const btnPlay = document.querySelector('.paging .btn-play .play');
const playIcon = document.querySelector('.paging .btn-play .play i');

let current = 0;
let old = 0;
let timer = null;
let isPlay = true;
const interval = 4000;

timer = setInterval(roll_next, interval);


btnNext.addEventListener('click', e => {
    if (isPlay === true) {
        clearInterval(timer);
        roll_next();
        timer = setInterval(roll_next, interval);
    }
})
btnPrev.addEventListener('click', e => {
    if (isPlay === true) {
        clearInterval(timer);
        roll_prev();
        timer = setInterval(roll_next, interval);
    }
})
pagingLi.forEach((pLi, idx) => {
    pLi.addEventListener('click', e => {
        pageView(idx);
        if (isPlay) {
            clearInterval(timer);
            timer = setInterval(roll_next, interval);
        }
        paging(idx);
        current = idx;
    })
})
btnPlay.addEventListener('click', e => {
    if (isPlay) {
        clearInterval(timer);
        playIcon.classList.replace('xi-pause', 'xi-play');
    } else {
        timer = setInterval(roll_next, interval);
        playIcon.classList.replace('xi-play', 'xi-pause');
    }
    isPlay = !isPlay;
});

function roll_next() {
    current++;
    current = (current + 3) % 3;
    let temp_prev = ((current - 1) + 3) % 3;
    let temp_next = (current + 1) % 3;
    bannerLi[current].style.transition = '0.3s';
    bannerLi[current].style.zIndex = '0';
    bannerLi[current].style.left = '0px';
    bannerLi[temp_prev].style.transition = '0.3s';
    bannerLi[temp_prev].style.zIndex = '-10';
    bannerLi[temp_prev].style.left = '-100%';
    bannerLi[temp_next].style.transition = '0s';
    bannerLi[temp_next].style.zIndex = '-100';
    bannerLi[temp_next].style.left = '100%';
    pageView(current);
}
function roll_prev() {
    current--;
    current = (current + 3) % 3;
    let temp_prev = ((current - 1) + 3) % 3;
    let temp_next = (current + 1) % 3;
    bannerLi[current].style.transition = '0.3s';
    bannerLi[current].style.zIndex = '0';
    bannerLi[current].style.left = '0px';
    bannerLi[temp_prev].style.transition = '0s';
    bannerLi[temp_prev].style.zIndex = '-100';
    bannerLi[temp_prev].style.left = '-100%';
    bannerLi[temp_next].style.transition = '0.3s';
    bannerLi[temp_next].style.zIndex = '-10';
    bannerLi[temp_next].style.left = '100%';
    pageView(current);
}
function paging(idx) {
    switch (idx) {
        case 0:
            if (current === 1) {
                roll_prev();
            }
            else if (current === 2) {
                roll_next();
            }
            break;
        case 1:
            if (current === 0) {
                roll_next();
            } else if (current === 2) {
                roll_prev();
            }
            break;
        case 2:
            if (current === 0) {
                roll_prev();
            } else if (current === 1) {
                roll_next();
            }
            break;
    }
}

function pageView(current) {
    pagingLi.forEach(clickPaging => {
        clickPaging.classList.remove('on');
    })
    pagingLi[current].classList.add('on');
}

