'use strict';

function fn1() {
    let a1 = '유재석';
    const subA = function () {
        console.log(`강호동`);
    }
    console.log(a1);
    subA();
} // 정의

fn1(); // 함수 소출

function fn2() {
    subA();
    console.log(a1);
}
fn2();
