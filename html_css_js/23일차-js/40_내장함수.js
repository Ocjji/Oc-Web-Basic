'use strict';

let a = 100;
let b = 100.154;
let c = 'Not a Number';
let d = 50 * 10;
let e = ' ';
let f = true;
// isNaN(value) : 숫자, 문자 판별
// ===결과값=== 
// 문자 : Ture 
// 숫자 : False 값을 가진다.
// 예외) 공백 : False / 논리값 : False

// isNaN 함수는 어떤 값이 NaN인지 판별합니다. isNaN 함수는 몇몇 혼란스러운 케이스을 가지고 있으므로, ECMAScript 2015에서 추가한 Number.isNaN()으로 바꾸는 편이 좋을 수도 있습니다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN


console.log(`출력 : ${typeof a} , ${isNaN(a)}`);
console.log(`출력 : ${typeof b} , ${isNaN(b)}`);
console.log(`출력 : ${typeof c} , ${isNaN(c)}`);
console.log(`출력 : ${typeof d} , ${isNaN(d)}`);
console.log(`출력 : ${typeof e} , ${isNaN(e)}`);
console.log(`출력 : ${typeof f} , ${isNaN(f)}`);

let str1 = a + c;
console.log(`출력 : ${str1} , ${typeof str1} , ${isNaN(str1)}`);

let str2 = String(a) + String(c);
console.log(`출력 : ${str2} , ${typeof str2} , ${isNaN(str2)}`);

let str3 = Number(str2);
console.log(`출력 : ${str3} , ${typeof str3} , ${isNaN(str3)}`);





