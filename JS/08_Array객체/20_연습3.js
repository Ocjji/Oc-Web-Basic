'use strict';

let arr = [10, 35, 25, 150, 5, 100, 50, 300, 40];

let temp = [...arr];
// let temp = arr;

// 1. 최대값, sort()

temp.sort((a, b) => b - a);


console.log(arr);
console.log(`최대값 : ${temp[0]}`);
console.log(`최대값 : ${temp.at(0)}`);

