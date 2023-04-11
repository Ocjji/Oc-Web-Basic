'use strict';

let color = Math.random() * 0xffffff; // 0x : 16진수 표기법
console.log(Math.floor(color));
console.log(parseInt(color));

let color2 = Math.floor(color).toString(16);
console.log(`#${color2}`);