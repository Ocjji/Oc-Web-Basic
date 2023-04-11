'use strict';

let now = new Date();
let y = now.getFullYear();
let m = now.getMonth() + 1; // 0: 1월 , 1: 2월 , ... 
let d = now.getDate();
let dd = now.getDay(); // 0: 일요일 , 1: 월요일 , 2: 화요일 , ...
// switch ~ case
switch (now.getDay()) {
    case 0: dd = '일'; break;
    case 1: dd = '월'; break;
    case 2: dd = '화'; break;
    case 3: dd = '수'; break;
    case 4: dd = '목'; break;
    case 5: dd = '금'; break;
    case 6: dd = '토'; break;
}
let arr = ['일', '월', '화', '수', '목', '금', '토'];
let day = arr[now.getDay()];

console.log(arr);
console.log(day);

console.log(`오늘은 ${y}년 ${m}월 ${d}일 ${dd}요일`);