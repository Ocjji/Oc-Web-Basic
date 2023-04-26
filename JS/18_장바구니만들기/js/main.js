'use strict';

import data from '../data/data.js';
console.log(data);

let listItem = document.querySelector('.listItem');
let pocket = document.querySelector('.pocket');
let removeAll = document.querySelector('.removeAll');
let reset = document.querySelector('.reset');

let btn_add = [];
let btn_del = [];
let btn_recover = [];
let listItem_li = [];
let pocket_li = [];

function happy() {
    listItem.innerHTML = null;
    pocket.innerHTML = null;

    for (let i = 0; i < data.length; i++) {
        if (data[i].state === 'onlist') {
            let li = document.createElement('li');

            let div = document.createElement('div');
            div.dataset.id = data[i].id;

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

            listItem_li = document.querySelectorAll('.listItem li');
            btn_add = document.querySelectorAll('.add');
            btn_del = document.querySelectorAll('.del');
        } else if (data[i].state === 'onbasket') {
            let li = document.createElement('li');

            let div = document.createElement('div');
            div.dataset.id = data[i].id;

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

            pocket_li = document.querySelectorAll('.pocket li');
            btn_recover = document.querySelectorAll('.recover');
            btn_del = document.querySelectorAll('.del');
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
            // console.log(e.currentTarget.parentElement.dataset.id);
            data[e.currentTarget.parentElement.dataset.id].state = 'onlist';

            happy();
        })
    })

    btn_del.forEach(element => {
        element.addEventListener('click', e => {
            // console.log(e.currentTarget.parentElement.dataset.id);
            data[e.currentTarget.parentElement.dataset.id].state = 'del';
            happy();
        })
    })
}

removeAll.addEventListener('click', e => {
    pocket_li.forEach(element => {
        // console.log(element.children[0]);
        if (data[element.children[0].dataset.id].state === 'onbasket') {
            data[element.children[0].dataset.id].state = 'del';
        }
    });
    happy();
})

reset.addEventListener('click', e => {
    pocket_li.forEach(element => {
        // console.log(element.children[0]);
        if (data[element.children[0].dataset.id].state === 'onbasket') {
            data[element.children[0].dataset.id].state = 'onlist';
        }
    });
    happy();
})

happy();