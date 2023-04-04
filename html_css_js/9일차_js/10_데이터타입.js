'use strict'; //엄격모드

let name = '김고은';
let age = 20;
let isPlay = true;
let end = null;
let data = undefined;
let arr = [10, 20, 10];
let obj = {a:10, b:20, c:'사과'};
let json = {"name":"송혜교", "age":20, "addr":"서울"};

// null은 선언할때 undefined 해당 변수에 값이 존재하지 않을때
// : 둘다 개념은 동일하나 사용방법이 다르다

// null Object가 아니다 (결과가 잘못나옴)

console.log('name : ', name , typeof name);
console.log('age : ', age , typeof age);
console.log('isPlay : ', isPlay , typeof isPlay);
console.log('end : ', end , typeof end);
console.log('data : ', data , typeof data);
console.log('arr : ', arr , typeof arr);
console.log('obj : ', obj , typeof obj);
console.log('json : ', json , typeof json);


