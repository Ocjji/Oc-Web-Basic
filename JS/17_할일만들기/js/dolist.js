'use strict';

let $inp = document.querySelector('.getItem input');
let $btn_add = document.querySelector('.getItem .btn_add');
let $list = document.querySelector('.dolist .list');

$btn_add.addEventListener('click', e => {
    let li = document.createElement('li');
    let txt = '';
    txt = $inp.value;
    console.log(txt);
    li.innerHTML = `<input type="checkbox" class="chk">` + ` <strong>${txt}</strong>` + ` <button class="remove">삭제</button>`;
    // 선언하여 사용 가능하다
    // li.append(chk, strong, btn);
    $list.append(li);

    let btn_remove = document.querySelectorAll('li .remove');
    btn_remove.forEach(element => {
        element.addEventListener('click', e => {
            console.log('remove');
            e.currentTarget.parentElement.remove();
        })
    })

    let chk_box = document.querySelectorAll('.dolist .chk');
    chk_box.forEach(element => {
        element.addEventListener('change', e => {
            console.log('checked');
            if (element.checked) {
                console.log(element.nextElementSibling);
                element.nextElementSibling.style.color = 'red';
                element.nextElementSibling.style.textDecoration = 'line-through';
            } else {
                element.nextElementSibling.style.color = 'black';
                element.nextElementSibling.style.textDecoration = 'none';
            }
        })
    })

    $inp.value = '';
    $inp.focus();
});
