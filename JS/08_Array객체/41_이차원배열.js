'use strict';

// 이차원배열
let arr = [
    [10, 20, 30],
    [40, 50, 60]
];
// let arr = [[10, 20, 30], [40, 50, 60]];
// let arr = [new Array(10,20,30), new Array(40,50,60)];
let a = [10, 20, 30];
let b = [40, 50, 60];
let arr1 = [a, b];

// console.log(arr[0][0]);
// console.log(arr[0][1]);
// console.log(arr[0][2]);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
console.log();
/* 
for (let item of arr) {
    for (let j of item) {
        console.log(j);
    }
}
 */

for (let row of arr) {
    for (let j of row) {
        console.log(j);
    }
}
console.log();

let sum1 = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum1 += arr[i][j];
    }
}
console.log(sum1);
console.log();

let sum2 = 0;

for (let row of arr) {
    for (let j of row) {
        sum2 += j;
    }
}
console.log(sum2);
console.log();

/* 
[
     열 열 열
행  [10,20,30]
행  [40,50,60]
]
*/