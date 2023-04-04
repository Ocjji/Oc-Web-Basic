'use strict';

function make() {
    return function () {
        console.log(`인사하기`);
    };
}

let x = make();
// console.log(x);
x();

console.log();

function make1(name) {
    return function (hi) {
        console.log(`인사하기 : ${name} ${hi}`);
    };
}

let x1 = make1('임지연');
// console.log(x1);
x1('안녕');

console.log();

function make2(name) {
    function innerFn(hi) {
        console.log(`인사하기2 : ${name} ${hi}`);
    }
    return innerFn;
}

let x2 = make2('이도현');
x2('안녕');



