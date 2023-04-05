'use strict';


let code = '70';

let len = code.length;

let m = '';

for (let i = 0; i < 6 - len; i++) {
    m += '0';
}

code = m + code;

console.log(code);



/* 
1. 코드번호 입력 - 변수명 : code
2. 자리수(길이) - 변수명 : len
3. 남은자리 '0'추가 처리 - for문, 변수명 : m
4. 입력코드 남은자리 연결 - m + code
 */

/* 

*/










