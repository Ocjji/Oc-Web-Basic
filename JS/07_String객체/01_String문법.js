'use strict';

/* 
    String : 문자열 내장 객체, 첫글자는 반드시 대문자로 시작
    typeof : string 와 다름
    
    < 종류 >
    String.속성
    String.메서드()

    < 방법 1 >
    let 변수 = new String('문자열...')
    let 사용자정의객체명 = new String('문자열...')

    < 방법 2 > ** 자주 사용 **
    let 변수 = '문자열' : string타입
    변수.속성
    변수.메서드() : 객체의 성격으로 사용가능
*/

const str1 = new String('안녕하세요 저는 홍길동입니다.');
console.log(typeof str1);
console.log(str1.length);

const str2 = '지금은 3교시입니다.';
console.log(typeof str2);
console.log(str2.length);










