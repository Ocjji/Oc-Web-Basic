'use strict';

let x = 0;
let y = 0;

do {
    x = Math.floor(Math.random() * 11);
    y = Math.floor(Math.random() * 11);
} while (x === y);

console.log(`x값 : ${x} , y값 : ${y}`);

