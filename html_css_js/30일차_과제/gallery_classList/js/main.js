'use strict';

let showImg = document.querySelector('.left .show');
let showText = document.querySelector('.left .showText');
let thumsList = document.querySelectorAll('.right li');
let thums = document.querySelectorAll('.right li img');
let thumIndex = document.querySelector('.current');
let total = document.querySelector('.right .total');

let img_index = 0;
let show_index = 1;

let timerId = null;
let interval = 1000;
let isPlay = true;


thumIndex.textContent = show_index;
total.textContent = ' / 24';
thums[0].style.opacity = '0.3';
thumsList[0].style.border = '2px solid black';
showImg.src = 'images/img' + img_index + '.jpg';
showText.textContent = 'imageView' + show_index;

for (let i = 0; i < 24; i++) {
    thums[i].src = 'images/thum' + i + '.jpg';
}

timerId = setInterval(rolling, interval);

function rolling() {
    img_index++;
    if (img_index > 23) {
        img_index = 0;
    }
    banner(img_index);
}

thumsList.forEach((element, idx) => {
    element.addEventListener('click', function () {
        thumsList.forEach(item => {
            item.classList.remove('on');
        })
        if (isPlay === true) {
            banner(idx);

            // console.log(thumsList[idx]);
            clearInterval(timerId);
            isPlay = false;
        } else if (isPlay === false && idx === img_index) {
            banner(idx);
            timerId = setInterval(rolling, interval);
            isPlay = true;
        } else if (isPlay === false && idx !== img_index) {
            banner(idx);
            clearInterval(timerId);

            isPlay = false;
        }
    });
});

function banner(num) {
    showImg.setAttribute('src', 'images/img' + num + '.jpg');
    thumsList[num].classList.add('on');

    show_index = num + 1;
    showText.textContent = 'imageView' + show_index;

    thumIndex.textContent = show_index;

    for (let item of thums) {
        item.style.opacity = '1';
    }
    for (let item of thumsList) {
        item.style.border = 'none';
    }
    thums[num].style.opacity = '0.3';
    thumsList[num].style.border = '2px solid black';
    img_index = num;
}