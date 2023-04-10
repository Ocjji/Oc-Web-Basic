'use strict';

let arr = [10, 20, 30, 40, 50];

/* 
3으로 나눠어 떨어지면 +100
그렇지 않으면 원래값
*/

// 1. 화살표 + if
let arr1 = arr.map((elment, index) => {
    if (elment % 3 === 0) {
        return elment + 100;
    } else {
        return elment;
    }
});

// 2. 화살표 + 삼항연산자
let arr2 = arr.map((elment, index) => elment % 3 === 0 ? elment + 100 : elment);

console.log(arr1);
console.log(arr2);


/* 
    * map() : for문과 유사하다

    Array.prototype.map()
    map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.


    구문
    arr.map(함수(currentValue[, index[, array]])[, thisArg])

    arr.map(함수(현재값, index){
        return 값
        return 수식
    })

    매개변수
    callback : 함수
    currentValue : 현재 요소.
    index Optional : 인덱스.
    array Optional : 배열.
    thisArg : callback을 실행할 때 this로 사용되는 값.

    반환 값
    배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.
*/