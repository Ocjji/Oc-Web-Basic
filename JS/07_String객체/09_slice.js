'use strict';

let str = '안녕하세요 저 사람은 홍길동입니다';

console.log(`1. ${str.slice(1, 3)}`);
console.log(`2. ${str.slice(2, 5)}`);
console.log(`3. ${str.slice(3)}`);
console.log(`4. ${str.slice(3, 8)}`);

console.log(`5. ${str.slice(-6, -3)}`);
console.log(`6. ${str.slice(3, -2)}`);
/* 
< 문법 >
str.slice(beginIndex[, endIndex])
str.slice(시작index, 종료index-1)

< 매개변수 >
beginIndex
    추출 시작점인 0부터 시작하는 인덱스입니다.만약 음수라면, beginIndex는 strLength(문자열 길이) + beginIndex로 취급됩니다. (예를 들어 beginIndex가 - 3이면 시작점은 strLength - 3).
    만약 beginIndex가 strLength 보다 크거나 같은 경우, slice()는 빈 문자열을 반환합니다.

endIndex (Optional)
    0부터 시작하는 추출 종료점 인덱스로 그 직전까지 추출됩니다.인덱스 위치의 문자는 추출에 포함되지 않습니다.
    만약 endIndex가 생략된다면, slice()는 문자열 마지막까지 추출합니다.만약 음수라면, endIndex는 strLength(문자열 길이) + endIndex 로 취급됩니다(예를 들어 endIndex가 - 3이면 종료점은 strLength - 3).

반환 값
    문자열의 추출된 부분을 담는 새로운 문자열이 반환됩니다.
*/






