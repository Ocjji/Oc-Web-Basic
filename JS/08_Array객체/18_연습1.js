'use strict';

let str = '안녕하세요';
// 1. 한글자씩 쪼개기 - 배열로 만들기
// 2. 뒤집기
// 3. 글자마다 '-' 연결 문자열로 변환
// 결과 : 요-세-하-녕-안

str = str.split('').reverse().join('-');
console.log(str, typeof str);




/* 
let arr = [];

for (let i = 0; i < str.length; i++) {
    arr[i] = str[i];
}

arr.reverse();

// for (let i = 0; i < arr.length; i++) {
//     str2[i] = arr[i];
// }

arr.toString();

console.log(arr);
console.log(typeof arr); */