'use strict';

let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;

// Array 객체 선언
let arr = new Array();

// Array 내 값 할당
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[4] = 50;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// let arr = [a, b, c, d, e];

for (let x in arr) {
    console.log(`${x} : ${arr[x]}`);
}
for (let item of arr) {
    console.log(`${item}`);
}

/* 
    Array : 비슷한 성격의 나열
            동일한 성격의 나열
            모든값 다 들어간다
            숫자, 문자, 함수, 배열, 객체, 내장객체


    일상                        Array
    1. 버스타기                 1. 데이터 처리하기
    2. 사람이 많다              2. 값이 많다 ( 값이 3개 이상 )
    3. 줄서기                   3. 나열, 줄세우기
    4. 추가, 삭제, 수정         4. 추가, 삭제, 수정
    5. 빨리타기                 5. 처리속도, 관리, 유지보수

    
    < 형식 > 
    let 배열명 = new Array()    let 배열명 = []
        배열명[0] = 값              배열명[0] = 값
        배열명[1] = 값              배열명[1] = 값
        배열명[2] = 값              배열명[2] = 값


    초기화 값
    let 배열명 = new Array(값1, 값2, 값3)
    let 배열명 = [값1, 값2, 값3]

*/







