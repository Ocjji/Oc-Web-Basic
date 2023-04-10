'use strict';

let arr1 = [10, 20, 30, 40];
let arr2 = ['보라돌이', '뚜비', '나나', '뽀'];

// indexOf : 위치 or -1(미검색)
console.log(arr1.indexOf(30));
console.log(arr1.indexOf(40));
console.log(arr1.indexOf(60));
console.log();
console.log(arr2.indexOf('보라돌이'));
console.log(arr2.indexOf('나나'));
console.log(arr2.indexOf('강아지'));
console.log();

// includes : 존재 유무 T / F
console.log(arr1.includes(10));
console.log(arr1.includes(30));
console.log(arr1.includes(70));
console.log();
console.log(arr2.includes('뚜비'));
console.log(arr2.includes('고양이'));

