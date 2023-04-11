'use strict';

let a1 = Math.floor(Math.random() * 16);
a1 = a1.toString(16); // 문자로 변환하지만 진법으로도 바꿔준다.
// console.log(a1);

let x1 = Math.floor(Math.random() * 16).toString(16);
let x2 = Math.floor(Math.random() * 16).toString(16);
let x3 = Math.floor(Math.random() * 16).toString(16);
let x4 = Math.floor(Math.random() * 16).toString(16);
let x5 = Math.floor(Math.random() * 16).toString(16);
let x6 = Math.floor(Math.random() * 16).toString(16);
console.log(x1);

console.log(`#${x1 + x2 + x3 + x4 + x5 + x6}`);

let res = '#';
for (let i = 0; i < 6; i++) {
    res += Math.floor(Math.random() * 16).toString(16);
}
console.log(res);

let num = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F'
// 배열로 분리하여 color값 만들어보기