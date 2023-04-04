'use strict';

// 구구단
const fn = (dan, i = 1) => {
    console.log(`${dan} * ${i} = ${dan * i}`);
    i++;
    if (i > 9) {
        return 0;
    } else {
        fn(dan, i);
    }
}
// 다른 방법
const fn1 = (dan, i = 1) => {

    if (i > 9) {
        return 0;
    } else {
        console.log(`${dan} * ${i} = ${dan * i}`);
        fn(dan, i + 1);
    }
}

fn(5);

console.log();

fn1(5);

