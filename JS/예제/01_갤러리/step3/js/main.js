'use strict';

// let arr = [];
// for (let i = 1; i <= 18; i++) {
//     arr.push('사진에 대한 타이틀 ' + i);
// }
// console.log(arr);

let data = [
    { id: 1, txt: '남은 이름자 가을로 라이너 어머님, 별 추억과 새겨지는 버리었습니다.', imgurl: 'images/bimg0.jpg', thum: 'images/thum0.jpg', url: 'http://www.naver.com' },
    { id: 2, txt: '없이 별이 딴은 까닭이요, 아이들의 이네들은 가슴속에 별들을 까닭입니다.', imgurl: 'images/bimg1.jpg', thum: 'images/thum1.jpg', url: 'http://www.nate.com' },
    { id: 3, txt: '나는 이제 별 노루, 봄이 언덕 아름다운 있습니다. 별 별 까닭이요, 나는 너무나 경, 불러 있습니다.', imgurl: 'images/bimg2.jpg', thum: 'images/thum2.jpg', url: 'http://www.google.com' },
    { id: 4, txt: '억과 새중잔아무말입 어머님, 별 추억과 새니다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg3.jpg', thum: 'images/thum3.jpg', url: 'http://www.naver.com' },
    { id: 5, txt: '아무말입니다. 대잔치 중 어머님, 별 추억과 새잔치 소잔치', imgurl: 'images/bimg4.jpg', thum: 'images/thum4.jpg', url: 'http://www.daum.net' },
    { id: 6, txt: '아이들의 이네아무말 노루, 봄이 언덕 아름다입치 중잔치 소니다. 대잔잔치', imgurl: 'images/bimg5.jpg', thum: 'images/thum5.jpg', url: 'http://www.daum.net' },
    { id: 7, txt: '아무말입니다. 대잔치  어머님, 별 추억과 새중잔치 소잔치', imgurl: 'images/bimg6.jpg', thum: 'images/thum6.jpg', url: 'http://www.nate.com' },
    { id: 8, txt: '가을로 라이너아무말 중잔치 소잔치속에 별들을 까닭입입니다. 대잔치', imgurl: 'images/bimg7.jpg', thum: 'images/thum7.jpg', url: 'http://www.nate.com' },
    { id: 9, txt: '노루, 봄이 언덕아무말입니속에 별들을 까닭입다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg8.jpg', thum: 'images/thum8.jpg', url: 'http://www.daum.net' },
    { id: 10, txt: '속에 별들을 까닭아무말입니다. 대잔의 이네들은 가슴속치 중잔치 소잔치', imgurl: 'images/bimg9.jpg', thum: 'images/thum9.jpg', url: 'http://www.naver.com' },
    { id: 11, txt: '아무말입니다. 대잔치 중잔 노루, 봄이 언덕 아름다치 소잔치', imgurl: 'images/bimg10.jpg', thum: 'images/thum10.jpg', url: 'http://www.naver.com' },
    { id: 12, txt: '노루, 봄이 언덕아무말입의 이네들은 가슴속니다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg11.jpg', thum: 'images/thum11.jpg', url: 'http://www.naver.com' },
    { id: 13, txt: '라이너 어머님아무속에 별들을 까닭입말입니다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg12.jpg', thum: 'images/thum12.jpg', url: 'http://www.google.com' },
    { id: 14, txt: '속에 별들을 까닭아무말입의 이네들은 가슴속니다. 대잔치 중잔치 소잔치', imgurl: 'images/bimg13.jpg', thum: 'images/thum13.jpg', url: 'http://www.google.com' },
    { id: 15, txt: '가을로 라이너아무말입니다. 대잔의 이네들은 가슴속치 중잔치 소잔치', imgurl: 'images/bimg14.jpg', thum: 'images/thum14.jpg', url: 'http://www.google.com' },
    { id: 16, txt: '아무말입니다.  노루, 봄이 언덕 아름다대잔치 중잔치 소잔치', imgurl: 'images/bimg15.jpg', thum: 'images/thum15.jpg', url: 'http://www.naver.com' },
    { id: 17, txt: '의 이네들은 가아무말입니다. 대잔치 중잔치 소잔치 어머님, 별 추억과 새', imgurl: 'images/bimg16.jpg', thum: 'images/thum16.jpg', url: 'http://www.naver.com' },
    { id: 18, txt: '억과 새중잔아무말입니다. 대잔치 중잔치 소속에 별들을 까닭입잔치', imgurl: 'images/bimg17.jpg', thum: 'images/thum17.jpg', url: 'http://www.naver.com' },
];


let li = document.querySelectorAll('.wrap .right ul li');
let pic = document.querySelector('.wrap .left img');
let current = document.querySelector('.wrap .right p .current');
let total = document.querySelector('.wrap .right p .total');
let txt = document.querySelector('.wrap .left span');
let cnt = 0;
let size = li.length;
// console.log(size);
total.textContent = size;

current.textContent = data[0].id;
txt.textContent = data[0].txt;

pic.addEventListener('click', e => {
    window.open(data[cnt].url);
});

li.forEach((element, idx) => {
    element.addEventListener('click', e => {
        console.log(cnt);
        pic.setAttribute('src', data[idx].imgurl);
        pic.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], 400)
        txt.textContent = data[idx].txt;
        current.textContent = data[idx].id;

        li.forEach(liItem => {
            liItem.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        cnt = idx;
    })
});