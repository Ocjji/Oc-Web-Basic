'use strict';

let arr = [10, 20, 30, 40, 50, 60, 70, 80];
arr.forEach(function (elment, idx, array, thisArg) {
    console.log(elment, idx, array);
});
// 3의 배수 값 출력

let arr1 = [];
arr.forEach(function (elment) {
    if (elment % 3 === 0) {
        console.log(elment);
        arr1.push(elment);
    }
});
console.log(arr1);

arr.forEach((item, idx) => {
    if (idx === 5) {
        console.log('중단');
        // break; continue; 사용불가
    }
});


/* 
Array.prototype.forEach()
요소(선택자)의 개수만큼 반복처리함

forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
 */

/* 
구문
arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
arr.forEach(함수(현재값){
    실행문
})

매개변수
callback : 함수
currentValue : 현재 요소.
index : 인덱스

    array
forEach()를 호출한 배열.

    thisArg
callback을 실행할 때 this로 사용할 값.

반환 값
*************   undefined   ***************
 */