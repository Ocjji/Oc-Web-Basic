'use strict';

let arr = [10, 20, 30, 40];

let test1 = (cur) => cur < 50;
let test2 = (cur) => cur % 10 === 0;
let test3 = (cur) => cur % 3 === 0;


console.log(arr.every(test1));
console.log(arr.every(test2));
console.log(arr.every(test3));


/* 
Array.prototype.every()

every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.
 */