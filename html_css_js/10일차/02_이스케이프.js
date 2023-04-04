'use strict';

let name = '홍길동';
const age = 20;
let addr = '서울';

// 형이 다르기 때문에 + 로 연결한다.

// 이름은 홍길동이고 나이는 20살이며 주소는 서울입니다.

console.log('이름은 ' + name + '이고 나이는 ' + age + '살이며 주소는 ' + addr + '입니다.');
console.log('이름은' , name , '이고 나이는' , age , '살이며 주소는' , addr, '입니다.');

// %s 문자열 , %d 숫자
console.log('이름은 %s이고 나이는 %d살이며 주소는 %s입니다.', name , age , addr);
console.log();

// 문자열 출력 \',  \",  \t,  \\
console.log('이름은 \"%s\"이고 나이는 %d살이며 주소는 %s입니다.', name , age , addr);