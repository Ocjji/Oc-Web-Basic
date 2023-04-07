'use strict';

let str1 = '5';
let str2 = str1.padStart(6, 0);
console.log(str2);

let str3 = str1.padEnd(6, 0);
console.log(str3);

let str4 = str1.padEnd(6, '*');
console.log(str4);

/* 
String.prototype.padStart()
padStart(문자열길이, 채워질값)

padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.
 */

/* 
구문
str.padStart(targetLength [, padString])

매개변수
targetLength
목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

padString Optional
현재 문자열에 채워넣을 다른 문자열. 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. 기본값은 " ". (U+0020)

반환값
시작점부터 주어진 문자열로 채워 목표 길이를 만족하는 String.
 */