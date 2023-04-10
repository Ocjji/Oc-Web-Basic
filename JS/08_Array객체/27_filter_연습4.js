'use strict';

const data = [
    { text: 'naver' },
    { text: 'NAVER' },
    { text: 'nate' },
    { text: 'NATE' },
    { text: 'google' },
    { text: 'GOOGle' },
    { text: 'dog' },
    { text: 'DOG' },
    { text: 'cat' },
    { text: 'CAT' },
    { text: 'CUTE' },
    { text: 'cute' },
];

let txt = 'do';

// 대소문자 구별하지 말고 모두 찾기
let res = [];

res = data.filter(elment => elment.text.toLowerCase().includes(txt));
console.log(res);
