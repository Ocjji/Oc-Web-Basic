'use strict';


import data from '../data/database.js';

let list = document.querySelector('.wrap .right ul');
// let li = document.querySelectorAll('.wrap .right ul li');
let pic = document.querySelector('.wrap .left img');
let current = document.querySelector('.wrap .right p .current');
let total = document.querySelector('.wrap .right p .total');
let txt = document.querySelector('.wrap .left span');
let cnt = 0;
let size = data.length;
let timer = null;
let interval = 4000;

total.textContent = size;

current.textContent = data[0].id;
txt.textContent = data[0].txt;

pic.addEventListener('click', e => {
    window.open(data[cnt].url);
});

data.forEach(element => {
    list.innerHTML += `<li><img src = "${element.thum}" alt = ""></li>`;
});

let li = document.querySelectorAll('.wrap .right ul li');
li[0].classList.add('on');

li.forEach((element, idx) => {
    element.addEventListener('click', e => {
        cnt = idx;
        banner();
        clearInterval(timer);
        timer = setInterval(rolling, interval);
    })
});

pic.addEventListener('mouseenter', e => {
    // console.log('enter');
    clearInterval(timer);
})
pic.addEventListener('mouseleave', e => {
    // console.log('leave');
    timer = setInterval(rolling, interval);
})

timer = setInterval(rolling, interval);
function rolling() {
    cnt++
    cnt = cnt % data.length;
    banner();
}

function banner() {
    pic.setAttribute('src', data[cnt].imgurl);
    pic.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], 400)
    txt.textContent = data[cnt].txt;
    current.textContent = data[cnt].id;

    li.forEach((liItem) => {
        liItem.classList.remove('on');
    })
    li[cnt].classList.add('on');
}