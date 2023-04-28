'use strict';

import images from '../data/images.js';
console.log(images);

/* const images = [
    { id: 0, imgPath: "images/", imgName: "photo0", imgExtension: ".jpg" },
    { id: 1, imgPath: "images/", imgName: "photo1", imgExtension: ".jpg" },
    { id: 2, imgPath: "images/", imgName: "photo2", imgExtension: ".jpg" },
    { id: 3, imgPath: "images/", imgName: "photo3", imgExtension: ".jpg" },
    { id: 4, imgPath: "images/", imgName: "photo4", imgExtension: ".jpg" },
    { id: 5, imgPath: "images/", imgName: "photo5", imgExtension: ".jpg" },
    { id: 6, imgPath: "images/", imgName: "photo6", imgExtension: ".jpg" },
    { id: 7, imgPath: "images/", imgName: "photo7", imgExtension: ".jpg" },
    { id: 8, imgPath: "images/", imgName: "photo8", imgExtension: ".jpg" },
    { id: 9, imgPath: "images/", imgName: "photo9", imgExtension: ".jpg" },
    { id: 10, imgPath: "images/", imgName: "photo10", imgExtension: ".jpg" },
    { id: 11, imgPath: "images/", imgName: "photo11", imgExtension: ".jpg" },
    { id: 12, imgPath: "images/", imgName: "photo12", imgExtension: ".jpg" },
    { id: 13, imgPath: "images/", imgName: "photo13", imgExtension: ".jpg" },
    { id: 14, imgPath: "images/", imgName: "photo14", imgExtension: ".jpg" },
    { id: 15, imgPath: "images/", imgName: "photo15", imgExtension: ".jpg" },
    { id: 16, imgPath: "images/", imgName: "photo16", imgExtension: ".jpg" },
    { id: 17, imgPath: "images/", imgName: "photo17", imgExtension: ".jpg" },
    { id: 18, imgPath: "images/", imgName: "photo18", imgExtension: ".jpg" },
    { id: 19, imgPath: "images/", imgName: "photo19", imgExtension: ".jpg" },
    { id: 20, imgPath: "images/", imgName: "photo20", imgExtension: ".jpg" },
    { id: 21, imgPath: "images/", imgName: "photo21", imgExtension: ".jpg" },
    { id: 22, imgPath: "images/", imgName: "photo22", imgExtension: ".jpg" },
    { id: 23, imgPath: "images/", imgName: "photo23", imgExtension: ".jpg" },
]; */

// 갤러리 ul 설정
const list = document.querySelector('.list');
// 갤러리 전체 이미지 출력 
// 24장 li에 저장 및 추가
images.forEach(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.dataset.id = image.id;
    img.src = image.imgPath + image.imgName + image.imgExtension;
    li.append(img);
    list.append(li);
})

// 갤러리 내부 요소 지정
const img = document.querySelectorAll('.gallery .list img');
const btn_more = document.querySelector('.gallery .more'); // 더보기

// 팝업 관련
const popupbg = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');
const pop_strong = document.querySelector('.popup strong');
const pop_img = document.querySelector('.popup img');
const popup_close = document.querySelector('.popup .close');
const popup_prev = document.querySelector('.popup-prev');
const popup_next = document.querySelector('.popup-next');

// 갤러리 관련 초기값
let list_H = 800; // 높이
let total = images.length; // 전체 이미지
let popup_idx = 0; // index

// 더보기 버튼 구현
btn_more.addEventListener('click', e => {
    list_H += 800;
    if (list_H > 2400) { list_H = 2400; };
    list.style.height = list_H + 'px';
})

// 팝업 이벤트 부여
img.forEach(element => {
    element.addEventListener('click', e => {
        console.log(e.currentTarget);
        let current = images[e.currentTarget.dataset.id];
        console.log((current));
        pop(current);
        popup_idx = current.id;
    });
});

// 팝업 함수
function pop(obj_image) {
    popupbg.classList.add('on');
    popup.classList.add('on');
    let num = obj_image.id;
    pop_strong.textContent = `image ${num + 1} of ${total}`;
    pop_img.src = obj_image.imgPath + obj_image.imgName + obj_image.imgExtension
}

// 팝업 닫기 기능 2개 bg / x버튼
popupbg.addEventListener('click', e => {
    popupbg.classList.remove('on');
    popup.classList.remove('on');
})
popup_close.addEventListener('click', e => {
    popupbg.classList.remove('on');
    popup.classList.remove('on');
})

// 팝업 prev , next 버튼 구현
popup_prev.addEventListener('click', e => {
    popup_idx--;
    if (popup_idx < 0) { popup_idx = images.length - 1 };
    pop_strong.textContent = `image ${popup_idx + 1} of ${total}`;
    pop_img.src = images[popup_idx].imgPath + images[popup_idx].imgName + images[popup_idx].imgExtension;
})
popup_next.addEventListener('click', e => {
    popup_idx++;
    if (popup_idx > 23) { popup_idx = 0 };
    pop_strong.textContent = `image ${popup_idx + 1} of ${total}`;
    pop_img.src = images[popup_idx].imgPath + images[popup_idx].imgName + images[popup_idx].imgExtension;
})







