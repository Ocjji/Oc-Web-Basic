'use strict';

let colors = ['노랑', '파랑', '빨강', '분홍'];

//결과 : [노랑색 ,파랑색 ,빨강색, 분홍색]

// map문  - 결과1
let arr1 = colors.map(item => item + '색');
console.log(arr1);

//forEach문  - 결과2
let arr2 = [];
colors.forEach((item, idx) => {
    arr2[idx] = item + '색';
    // arr2.push(item +'색');
});
console.log(arr2);
