'use strict';

let r1 = Math.random();
// console.log(r1);

r1 = Math.random() * 10;
// Math.random() * 범위
// 0 ~ 10 무작위
// console.log(r1);

r1 = Math.random() * 5 + 5;
// Math.random() * 범위 + 시작값
// console.log(r1);

r1 = Math.abs(-2);
console.log(r1);
r1 = Math.ceil(5.3);
console.log(r1);
r1 = Math.floor(5.3);
console.log(r1);
r1 = Math.max(10, 50, 77, 30);
console.log(r1);
r1 = Math.min(10, 50, 77, 30);
console.log(r1);
r1 = Math.round(5.4999);
console.log(r1);

// 1 ~ 10 까지 난수 출력
r1 = Math.floor(Math.random() * 10 + 1);
console.log(r1);
/*
Math.random();
1.random() : 0 초과, 1미만 실수값
.ceil(x) : 소수점 이하 올림
.floor(x) : 소수점 이하 버림
.max() : 최대값
.min() : 최소값
.abs() : 절대값
.round()

*/