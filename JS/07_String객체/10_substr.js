'use strict';

let str = '안녕하세요 저 사람은 홍길동입니다';

// console.log(`1. ${str.slice(1, 3)}`);
console.log(`1. ${str.substring(1, 3)}`);

// console.log(`2. ${str.slice(2, 5)}`);
console.log(`2. ${str.substring(2, 5)}`);

console.log(`3. ${str.slice(3)}`);
console.log(`4. ${str.slice(3, 8)}`);

// 전체출력
console.log(`4. ${str.substring(undefined)}`);

// substr은 사용 불가 ( 시작index 음수 불가 )

console.log(`5. ${str.slice(-6, -3)}`);
console.log(`6. ${str.slice(3, -2)}`);


/* 
    str.substr(start[, length])
    시작 index부터 문자의 개수만큼 반환하지만,
    사용을 권장하지는 않는다.

    str.substring(indexStart[, indexEnd])
    substring은 slice와 동일하지만, 시작index 음수를 쓸 수 없다
*/






