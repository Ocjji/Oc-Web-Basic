'use strict';

let arr1 = ['김기철', '김형종', '이상연', '이원철', '정종우', '선우명관'];

let txt = '김';

// 배열에서 '김'이 들어간 값을 출력, 
// incluse , indexOf 사용

let res1 = arr1.filter(element => element.includes(txt));

let res2 = arr1.filter(element => element.indexOf(txt) !== -1);

console.log(res1);
console.log(res2);

