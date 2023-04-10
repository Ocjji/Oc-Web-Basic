'use strict';

let arr = [31, 21, 22, 46, 23, 14];
let sum = 0;
let avg = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }


// for (let x in arr) {
//     sum += arr[x];
// }


for (let y of arr) {
    sum += y;
}


console.log(sum);

avg = sum / arr.length;
console.log(avg.toFixed(2), typeof avg.toFixed(2));
