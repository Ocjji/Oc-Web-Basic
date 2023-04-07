'use strict';

let str = '안녕하세요 홍길동입니다. 지금은 공부중';

let a = str.includes('안');
let b = str.includes('길동');
let c = str.includes('붕어');
let d = str.includes('.', 5);



console.log(`1. ${a}`);
console.log(`2. ${b}`);
console.log(`3. ${c}`);
console.log(`4. ${d}`);

let str1 = '송혜교'

if (str.includes(str1)) {
    console.log(`찾기 성공`);
} else {
    console.log(`찾기 실패`);
}

/* 
    String.prototype.includes()

    includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다. 검색 시 대소문자를 구분합니다.

    구문
    includes(searchString)
    includes(검색어)
    includes(searchString, position)
    includes(검색어, 시작위치)

    
    매개변수
    searchString
    이 문자열에서 찾을 다른 문자열. ** 정규표현식이 올 수 없습니다.**

    position (Optional)
    searchString을 찾기 시작할 위치. (기본값 0).

    반환값
    문자열을 찾아내면 true . 실패하면 false .
 */






