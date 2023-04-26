'use strict';

import data from '../data/data.js';
console.log(data);

let listItem = document.querySelector('.listItem');
let pocket = document.querySelector('.pocket');
let removeAll = document.querySelector('.removeAll');
let reset = document.querySelector('.removeAll');

let btn_add = null;

let btn_del = null;
let btn_recover = null;

function happy() {
    listItem.innerHTML = null;
    pocket.innerHTML = null;
    for (let i = 0; i < data.length; i++) {
        if (data[i].state === 'onlist') {
            let li = document.createElement('li');
            let div = document.createElement('div');
            div.dataset.id = data[i].id;
            console.log(div);
            let img = document.createElement('img');
            img.setAttribute('src', data[i].imgSrc);
            let strong = document.createElement('strong');
            strong.textContent = data[i].title;
            let btn1 = document.createElement('button');
            btn1.textContent = '담기';
            btn1.classList.add('add');
            let btn2 = document.createElement('button');
            btn2.textContent = '삭제';
            btn2.classList.add('del');

            div.append(img, strong, btn1, btn2);
            li.append(div);
            listItem.append(li);

            btn_add = document.querySelectorAll('.add');
            btn_del = document.querySelectorAll('.del');
        } else if (data[i].state === 'onbasket') {
            let li = document.createElement('li');
            let div = document.createElement('div');
            div.dataset.id = data[i].id;
            div.classList.add(data[i].id)
            let img = document.createElement('img');
            img.setAttribute('src', data[i].imgSrc);
            let strong = document.createElement('strong');
            strong.textContent = data[i].title;
            let btn1 = document.createElement('button');
            btn1.textContent = '복구';
            btn1.classList.add('recover');
            let btn2 = document.createElement('button');
            btn2.textContent = '삭제';
            btn2.classList.add('del');

            div.append(img, strong, btn1, btn2);
            li.append(div);
            pocket.append(li);
            btn_recover = document.querySelectorAll('.recover');
            btn_del = document.querySelectorAll('.del');
        } else if (data[i].state === 'del') {
            // 구현 안함
        }
    }
    btn_add.forEach(element => {
        element.addEventListener('click', e => {
            // console.log(e.currentTarget.parentElement.dataset.id);
            data[e.currentTarget.parentElement.dataset.id].state = 'onbasket';

            happy();
        })
    })
    btn_recover.forEach(element => {
        element.addEventListener('click', e => {
            console.log(e.currentTarget.parentElement.dataset.id);
            data[e.currentTarget.parentElement.dataset.id].state = 'onlist';

            happy();
        })
    })
    btn_del.forEach(element => {
        element.addEventListener('click', e => {
            console.log(e.currentTarget.parentElement.dataset.id);
            data[e.currentTarget.parentElement.dataset.id].state = 'del';

            happy();
        })
    })

}

happy();
removeAll.addEventListener('click', e => {
    console.log(e.currentTarget.nextSibling);
})

/* 
btn_add.forEach(element => {
    element.addEventListener('click', e => {
        // console.log(e.currentTarget.parentElement.dataset.id);
        data[e.currentTarget.parentElement.dataset.id].state = 'onbasket';

        happy();
    })
})
btn_recover.forEach(element => {
    element.addEventListener('click', e => {
        console.log(e.currentTarget.parentElement.dataset.id);
        data[e.currentTarget.parentElement.dataset.id].state = 'onlist';

        happy();
    })
}) */








