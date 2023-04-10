'use strict';

let arr = [10, 20, 30, 40, 50];
let a1 = arr.filter(elment => elment >= 30);
let a2 = arr.find(elment => elment >= 30);
let a3 = arr.findIndex(elment => elment >= 30);

console.log(a1); // 배열 [ 30, 40, 50 ]
console.log(a2); // 값 30
console.log(a3); // index 2

let data = [
    { id: 1, name: '홍길동', age: 15, addr: '서울' },
    { id: 2, name: '고길동', age: 25, addr: '서울' },
    { id: 3, name: '강호동', age: 22, addr: '인천' },
    { id: 4, name: '송혜교', age: 18, addr: '서울' },
    { id: 5, name: '김철수', age: 24, addr: '부산' },
    { id: 6, name: '김기철', age: 30, addr: '부산' },
];

// id가 3인 사람의 객체 출력 {};

let prt_filter = data.filter(elment => elment.id === 3);
console.log(prt_filter);
// [ { id: 3, name: '강호동', age: 22, addr: '인천' } ]

let prt_find = data.find(elment => elment.id === 3);
console.log(prt_find);
// { id: 3, name: '강호동', age: 22, addr: '인천' }

let prt_findIndex = data.findIndex(elment => elment.id === 3);
console.log(data[prt_findIndex]);
// { id: 3, name: '강호동', age: 22, addr: '인천' }



/* 
1. 반환값 = array[]
.filter(함수(현재값, index){
    return 조건
})

2. 반환값 = 1개
.find(함수(현재값){
    return 조건
})

3. 반환값 = index번호
.findIndex(함수(현재값){
    return 조건
})


Array.prototype.find()
find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.

Array.prototype.findIndex()
findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.

매개변수
callback
배열의 각 값에 대해 실행할 함수. 아래의 세 인자를 받습니다._ element _ : 콜백함수에서 처리할 현재 요소.

indexOptional
콜백함수에서 처리할 현재 요소의 인덱스.

arrayOptional
find 함수를 호출한 배열.

thisArg
선택 항목. 콜백이 호출될 때 this로 사용할 객체.

반환 값
주어진 판별 함수를 만족하는 첫 번째 요소의 값. 그 외에는 undefined.

*/