'use strict';

let arr = [10, 20, 30];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;

// for기본
for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i]
}
console.log(sum1);

// for ~ in
for (let i in arr) {
    sum2 += arr[i];
}
console.log(sum2);

// for ~ of
for (let j of arr) {
    sum3 += j;
}
console.log(sum3);

// forEach
arr.forEach(element => {
    sum4 += element;
});
console.log(sum4);

// map
arr.map(element => sum5 += element);
console.log(sum5);

// 
// let total = arr.reduce(function (acc, cur, idx, src) {
//     console.log(`${acc}/${cur}/${idx},${src}`);
//     return acc + cur;
// }, 0);   0은 시작부터 보고싶을때

let total = arr.reduce((acc, cur, idx) => acc + cur);
console.log(total);

/* 
Array.prototype.reduce()
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다. 
*/

/* 
    리듀서 함수는 네 개의 인자를 가집니다.

누산기 (acc)
현재 값 (cur)
현재 인덱스 (idx)
원본 배열 (src)
리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

구문
    arr.reduce(callback[, initialValue])

매개변수
callback
배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.

accumulator
누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.

currentValue
처리할 현재 요소.

currentIndex Optional
처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.

array Optional
reduce()를 호출한 배열.

initialValue Optional
callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

반환 값
누적 계산의 결과 값.
*/