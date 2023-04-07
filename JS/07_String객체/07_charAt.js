'use strict';

// charAt()

let str = '어차피연습이니까';
/* 
console.log(`${str.length}`);
console.log(`${str.charAt(0)}`);
console.log(`${str.charAt(1)}`);
console.log(`${str.charAt(2)}`);
console.log(`${str.charAt(3)}`);
console.log(`${str.charAt(4)}`);
console.log(`${str.charAt(5)}`);
console.log(`${str.charAt(6)}`);
console.log(`${str.charAt(7)}`);
console.log(`${str.charAt(8)}`); */


for (let i = 0; i < str.length; i++) {
    console.log(`${str.charAt(i)}`);
}

for (let x in str) {
    console.log(x);
}

for (let x of str) {
    console.log(x);
}

let a = 100;
let b = a.toString();

console.log(b.charAt());
console.log(b.charAt(1));
console.log(b.charAt(2));
console.log(b.length);
/* 
    < mdn >
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

    charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.

    < 구문 >

    str.charAt(index) : 글자 1개
    Copy to Clipboard

    < 매개변수 >
    0과 문자열의 길이 - 1 사이의 정수값.
    인자를 생략하면 기본값으로 0를 설정되고 첫 문자를 반환한다.

    index

    < 반환 값 >
    지정된 인덱스에 해당하는 유니코드 단일문자를 반환한다.
    만약 인덱스가 문자열 길이보다 큰 경우 빈 문자열 (예) " " 을 반환한다.
*/








