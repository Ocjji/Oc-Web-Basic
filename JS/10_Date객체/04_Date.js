'use strict';

let now = new Date();

let make1 = (x) => {
    return x / 10 < 1 ? x = '0' + x : x;
};
let make2 = (y) => {
    y = y.toString().padStart(2, '0');
    return y
}


let y = now.getFullYear();
let mon = now.getMonth();
mon = make2(mon);
let d = now.getDate();
d = make1(d);

let arr_day = ['일', '월', '화', '수', '목', '금', '토'];
let day = arr_day[now.getDay()];
day = make1(day);

let h = now.getHours();
if (parseInt(h) / 12 > 1) {
    h = '오후 ' + (parseInt(h) - 12);
} else {
    h = '오전 ' + h;
}
h = make1(h);

let m = now.getMinutes();
m = make1(m);

let s = now.getSeconds();
s = make1(s);





console.log(`오늘은 ${y}년 ${mon}월 ${d}일 ${day}요일`);
console.log(`지금은 ${h}시 ${m}분 ${s}초`);

// 오늘은 2023년 04월 11일 화요일
// 지금은 오전 11시 12분 01초
// 지금은 오후 02시 08분 15초