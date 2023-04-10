'use strict';

let arr = [10, 20, 30, 40, 50, 60];

const callback = (item, idx) => {
    if (item % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

let result1 = arr.filter(callback);
console.log(result1);

// 30 이상의 값 가져오기
let result2 = arr.filter(element => element >= 30);
console.log(result2);

// 30 외 값 가져오기
let result3 = arr.filter(element => element !== 30);
console.log(result3);

/* 
Array.prototype.filter()
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 
******   새로운 배열로 반환합니다.  ******
*/

/* 
    구문
        arr.filter(callback(element[, index[, array]])[, thisArg])
        arr.filter(function( 현재값, 인덱스, 배열) {
            return 조건
        })
        arr.filter(( 현재값, 인덱스, 배열) => 조건);
    
    매개변수
    callback : 함수. 
    true를 반환하면 요소를 유지하고, 
    false를 반환하면 버립니다.

    다음 세 가지 매개변수를 받습니다.

    element
    처리할 현재 요소.

    index Optional
    처리할 현재 요소의 인덱스.

    array Optional
    filter를 호출한 배열.

    thisArg Optional
    callback을 실행할 때 this로 사용하는 값.

    반환 값
    테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.
*/

