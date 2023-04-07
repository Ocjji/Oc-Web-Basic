'use strict';

let str = '안녕하세요 저는 홍길동입니다';

let str1 = str.search('송혜교');

if (str1 !== -1) {
    console.log(`찾았다! index : ${str1}`);
} else {
    console.log(`못찾겠다`);
}



/* 
    String.prototype.search(정규표현식)

    search() 메서드는 정규 표현식과 이 String 객체간에 같은 것을 찾기 위한 검색을 실행한다.
 */






