'use strict';

/* 
let code = '70';

let len = code.length;

let m = '';

for (let i = 0; i < 6 - len; i++) {
    m += '0';
}

code = m + code;

console.log(code);

 */

/* 
# make('값', 자리수)
## return 처리;

1. 코드번호 입력 - 변수명 : code
2. 자리수(길이) - 변수명 : len
3. if문 - 코드길이와 총 자리수 비교
4. 남은자리 '0'추가 처리 - for문, 변수명 : m
5. 입력코드 남은자리 연결 - m + code

*/

const make = (a, b) => {

    let result = '';

    if (a.length < b) {
        for (let i = 0; i < b - a.length; i++) {
            result += '0';
        }
        result += a;
    }

    return result;
}




let z = make('70', 6);
console.log(`과자 : ${z}`);

z = make('100', 8);
console.log(`수박 : ${z}`);







