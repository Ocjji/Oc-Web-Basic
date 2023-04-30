'use strict';



const bannerLi = document.querySelectorAll('.main-banner li');
const pagingLi = document.querySelectorAll('.paging li');
const btnNext = document.querySelector('.btn-wrap .next');
const btnPrev = document.querySelector('.btn-wrap .prev');

let current = 0;
let old = 0;
let isPlay = null;
const interval = 3000;

isPlay = setInterval(roll_next, interval);


btnNext.addEventListener('click', e => {
    clearInterval(isPlay);
    roll_next();
    isPlay = setInterval(roll_next, interval);
})
btnPrev.addEventListener('click', e => {
    clearInterval(isPlay);
    roll_prev();
    isPlay = setInterval(roll_next, interval);
})
pagingLi.forEach((pLi, idx) => {
    pLi.addEventListener('click', e => {
        pageView(idx);
        clearInterval(isPlay);
        isPlay = setInterval(roll_next, interval);
        paging(idx);
        current = idx;
    })

})

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