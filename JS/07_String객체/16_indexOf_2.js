'use strict';

let str = '안녕하세요 저는 홍길동입니다';

let str1 = str.indexOf('송혜교');

if (str1 === -1) {
    console.log(`못찾겠다`);
} else {
    console.log(`여기 : ${str1}`);
}



/* 
구문
str.indexOf(searchValue[, fromIndex])
str.indexOf(검색값)
str.indexOf(검색값, 시작위치)


매개변수
searchValue
찾으려는 문자열. 아무 값도 주어지지 않으면 문자열 "undefined"를 찾으려는 문자열로 사용합니다.

fromIndex (Optional)
문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값입니다. 어떤 정수값이라도 가능합니다. 기본값은 0이며, 문자열 전체를 대상으로 찾게 됩니다. 만약 fromIndex 값이 음의 정수이면 전체 문자열을 찾게 됩니다. 만약 fromIndex >= str.length 이면, 검색하지 않고 바로 -1을 반환합니다. searchValue가 공백 문자열이 아니라면, str.length를 반환합니다.

반환 값
searchValue의 첫 번째 등장 인덱스. 찾을 수 없으면 -1.
 */






