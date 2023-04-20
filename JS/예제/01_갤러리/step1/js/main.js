'use strict';

let arr = [];
for (let i = 1; i <= 18; i++) {
    arr.push('사진에 대한 타이틀 ' + i);
}
// console.log(arr);
let li = document.querySelectorAll('.wrap .right ul li');
let pic = document.querySelector('.wrap .left img');
let current = document.querySelector('.wrap .right p .current');
let total = document.querySelector('.wrap .right p .total');
let txt = document.querySelector('.wrap .left span');
let cnt = 0;
let size = li.length;
// console.log(size);

txt.textContent = arr[cnt];
current.textContent = cnt + 1;
total.textContent = size;

li.forEach((element, idx) => {
    element.addEventListener('click', e => {
        console.log(cnt);
        pic.setAttribute('src', 'images/bimg' + idx + '.jpg');
        pic.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], 400)
        txt.textContent = arr[idx];
        current.textContent = idx + 1;

        li.forEach(liItem => {
            liItem.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        cnt = idx;
    })
});