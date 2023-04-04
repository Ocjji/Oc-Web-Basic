'use strict';
// cls 터미널에서 앞 로그들 지우기 명령어
var myNum1;
console.log(myNum1);
myNum1 = 100;
console.log(myNum1);

var myNum2;
myNum2 = 200;
console.log(myNum2);

// var 값 재할당 가능
myNum2 = 500;
console.log(myNum2);

// var 단점 - var로 재정의 시
// 기존의 메모리 할당 영역(집)을 삭제하고, 새로운 메모리 영역(집)을 생성함
var myNum2 = 50;
console.log(myNum2);

// let : 재할당 가능, 재선언 불가능

// 1. 변수 선언
let myNum3;
// 2. 변수에 값을 할당
myNum3 = 100;
console.log(myNum3);
// 재할당
myNum3 = 200;
console.log(myNum3);

// let myNum3 = 400; error - 재선언 불가능
console.log(myNum3);

// const : 상수 개념 - 한번 선언하면
// 재할당, 재선언 모두 불가능
const MY_NUM4 = 300;
console.log(MY_NUM4);

// const myNum5;
// myNum5 = 400;
// console.log(myNum5);
// const 변수=값; 선언과 동시에 할당을 해야함

const myNum5 = 400;
console.log(myNum5);
// myNum5 = 500; error 재할당 불가능