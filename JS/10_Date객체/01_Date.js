'use strict';

let now = new Date();
console.log(now);
// 1. getXX : 게터(getter) - 객체의 값을 얻어오기
// 2. setXX : 세터(setter) - 객체의 값을 설정하기
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

let now1 = new Date(2023, 4, 30);
console.log(now1);