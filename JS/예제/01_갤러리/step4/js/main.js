'use strict';

// let arr = [];
// for (let i = 1; i <= 18; i++) {
//     arr.push('사진에 대한 타이틀 ' + i);
// }
// console.log(arr);

let data = [
    { id: 1, txt: '남름자 가을로 라이너 어머억과 새겨지는 버리었습니다.', imgurl: 'images/bimg0.jpg', thum: 'images/thum0.jpg', url: 'http://www.naver.com' },
    { id: 2, txt: '없이 딴은 까닭이요, 아이은 가슴속에 별들을 까닭입니다.', imgurl: 'images/bimg1.jpg', thum: 'images/thum1.jpg', url: 'http://www.nate.com' },
    { id: 3, txt: '나제 별 노루, 봄이 언덕 습니다. 별 별 까닭무있습니다.', imgurl: 'images/bimg2.jpg', thum: 'images/thum2.jpg', url: 'http://www.google.com' },
    { id: 4, txt: '억중잔아무말입 어머님, 별니다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg3.jpg', thum: 'images/thum3.jpg', url: 'http://www.naver.com' },
    { id: 5, txt: '아니다. 대잔닭이요,치 중 어머님, 새잔치 소잔치', imgurl: 'images/bimg4.jpg', thum: 'images/thum4.jpg', url: 'http://www.daum.net' },
    { id: 6, txt: '아 이네아무말 노루, 봄이 다입치 중잔치 소니다. ', imgurl: 'images/bimg5.jpg', thum: 'images/thum5.jpg', url: 'http://www.daum.net' },
    { id: 7, txt: '아니다. 대잔치  어머닭이요,님, 새중잔치 소잔치', imgurl: 'images/bimg6.jpg', thum: 'images/thum6.jpg', url: 'http://www.nate.com' },
    { id: 8, txt: '가라이너아무말 중잔치 소들을 까닭입입니다. 대잔치', imgurl: 'images/bimg7.jpg', thum: 'images/thum7.jpg', url: 'http://www.nate.com' },
    { id: 9, txt: '노이 언덕아무말입니속에 입다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg8.jpg', thum: 'images/thum8.jpg', url: 'http://www.daum.net' },
    { id: 10, txt: '들을 까닭아무말입니다. 들은 가슴속치 중잔치 소잔치', imgurl: 'images/bimg9.jpg', thum: 'images/thum9.jpg', url: 'http://www.naver.com' },
    { id: 11, txt: '입니다. 대잔치 중잔 노루닭이요,덕 아름다치 소잔치', imgurl: 'images/bimg10.jpg', thum: 'images/thum10.jpg', url: 'http://www.naver.com' },
    { id: 12, txt: '봄이 언덕아무말입의 이네속니다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg11.jpg', thum: 'images/thum11.jpg', url: 'http://www.naver.com' },
    { id: 13, txt: '어머님아무속에 별들을 까다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg12.jpg', thum: 'images/thum12.jpg', url: 'http://www.google.com' },
    { id: 14, txt: '들을 까닭아무말입의 이네속니다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg13.jpg', thum: 'images/thum13.jpg', url: 'http://www.google.com' },
    { id: 15, txt: '라이너아무말입니다. 대잔은 가슴속치 중잔치 소잔치', imgurl: 'images/bimg14.jpg', thum: 'images/thum14.jpg', url: 'http://www.google.com' },
    { id: 16, txt: '입니다.  노루, 봄이 언덕잔닭이요,치 중잔치 소잔치', imgurl: 'images/bimg15.jpg', thum: 'images/thum15.jpg', url: 'http://www.naver.com' },
    { id: 17, txt: '들은 가아무말입니다. 대 소잔치 어머님, 별 추억과 새', imgurl: 'images/bimg16.jpg', thum: 'images/thum16.jpg', url: 'http://www.naver.com' },
    { id: 18, txt: '중잔아무말입니다. 대잔치속에 별들을 까닭입잔치', imgurl: 'images/bimg17.jpg', thum: 'images/thum17.jpg', url: 'http://www.naver.com' },
];

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

// console.log(size);
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
        // console.log(cnt);
        // pic.setAttribute('src', data[idx].imgurl);
        // pic.animate([
        //     { opacity: 0 },
        //     { opacity: 1 }
        // ], 400)
        // txt.textContent = data[idx].txt;
        // current.textContent = data[idx].id;

        // li.forEach(liItem => {
        //     liItem.classList.remove('on');
        // })
        // e.currentTarget.classList.add('on');
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