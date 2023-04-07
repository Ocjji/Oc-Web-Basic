'use strict';


let str = 'Good morning afternoon evening DOG CAT Naver dog Cat Google Nate naver MORNING';

let txt = 'doG'; // 검색   결과  DOG , dog
let result1 = ''; // indexOf - 결과값 : dog 검색 or dog 검색못함
let result2 = ''; // includes - 결과값 : dog 검색 or dog 검색못함

// 최종결과 둘 다 dog 찾음

if (str.indexOf(txt.toLowerCase()) > 0 || str.indexOf(txt.toUpperCase()) > 0) {
    result1 = 'dog 검색함';
} else {
    result1 = 'dog 검색못함';
}

if (str.includes(txt.toLowerCase()) || str.includes(txt.toUpperCase())) {
    result2 = 'dog 검색함';
} else {
    result2 = 'dog 검색못함';
}
console.log(`result1(indexOf) : ${result1}`);
console.log(`result2(includes) : ${result2}`);









