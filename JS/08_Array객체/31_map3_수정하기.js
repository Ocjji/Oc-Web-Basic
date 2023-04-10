'use strict';

let data = [
    { id: 1, name: '홍길동', age: 15, addr: '서울' },
    { id: 2, name: '고길동', age: 25, addr: '서울' },
    { id: 3, name: '강호동', age: 22, addr: '인천' },
    { id: 4, name: '송혜교', age: 18, addr: '서울' },
    { id: 5, name: '김철수', age: 24, addr: '부산' },
    { id: 6, name: '김기철', age: 30, addr: '부산' },
];

// 나이가 3으로 나누어 떨어지면 3의 배수 반환, 그렇지 않으면 원래값

let data1 = data.map((elment, index) => {
    if (elment.age % 3 === 0) {
        return {
            ...elment,
            age: '3의 배수'
        };
    } else {
        return elment;
    }
});
console.log(data1);

let data2 = data.map((elment, index) => {
    if (elment.id === 3) {
        return {
            ...elment,
            name: '임지연',
            age: 26,
            addr: '미국'
        };
    } else {
        return elment;
    }
});
console.log(data2);

let data3 = data.map((elment, index) => elment.id === 5 ? { ...elment, name: '유재석', age: 50, addr: '청담동' } : elment);
console.log(data3);

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