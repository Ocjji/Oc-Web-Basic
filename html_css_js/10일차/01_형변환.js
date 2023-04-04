'use strict';

let a = 10;
console.log('a :', a , typeof a);
a = String(a);
console.log('a :', a , typeof a);
let b = a + 20; // 문자 + 숫자 : 연결 1020
console.log('b :', b , typeof b);
console.log();

let a1 = '200';
console.log('a1 :', a1 , typeof a1);
a1 = Number(a1);
console.log('a1 :', a1 , typeof a1);
let a2 = a1 + 20;
console.log('a2 :', a2 , typeof a2);
console.log();

let a3 = '300';
a3 = parseInt(a3);
console.log('a3 :', a3 , typeof a3);
console.log();

let a4 = '200px';
let a5 = a4 + 100; // 200px100 ( string으로 처리 )

a4 = parseInt(a4); // px 없어지고, 200 만 처리
a5 = a4 + 100;
console.log('a5 :', a5 , typeof a5);
console.log();

let a6 = '20살';
a6 = parseInt(a6);
console.log('a6 :', a6);
console.log()

// toString (진법)
let c1 = 100;
let d1 = c1.toString(); // 10진법
console.log('d1 :', d1 , typeof d1);

d1 = c1.toString(2);
console.log('d1 :', d1 , typeof d1);

d1 = c1.toString(8);
console.log('d1 :', d1 , typeof d1);

d1 = c1.toString(16);
console.log('d1 :', d1 , typeof d1);

// toFixed (소수점)
let c2 = 100.127842;
let d2 = c2.toFixed(3); // 반올림
console.log('d2 :', d2 , typeof d2);

d2 = c2.toFixed(2); // 반올림
console.log('d2 :', d2 , typeof d2);
/* 
Number

String

parseInt

toString

toFixed

isNaN 
*/