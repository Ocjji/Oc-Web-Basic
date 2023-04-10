'use strict';

let arr = [10, 35, 25, 150, 5, 100, 50, 300, 40];

let maxNum = 0;

for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
        maxNum = arr[i];
    }
}



console.log(`최대값 : ${maxNum}`);


/* 
console.log(arr);
console.log(`최대값 : ${temp[0]}`);
console.log(`최대값 : ${temp.at(0)}`);
 */
