'use strict';

// 선언적함수 ( 일반함수 )
function test01() {
    console.log('test01');
}
test01();

// 익명함수
const test02 = function () {
    console.log('test02');
}
test01();
test02();

// 화살표함수
const test03 = () => {
    console.log('test03');
}
test01();
test02();
test03();

// 매개변수 - 파라미터
function make1(name) { // 지역변수
    console.log(`이름은 ${name}입니다.`);
}
make1('철수'); // 값 - 인자

const make2 = function (age) {
    console.log(`나이는 ${age}입니다.`);
}
make2(20);

const make3 = addr => console.log(`주소는 ${addr}입니다.`);
make3('인천');

const sum = (a, b) => {
    return a + b;
}
console.log(sum(10, 20));
let result = sum(20, 30);
console.log(`두수의 합 : ${result}`);

// 즉시실행함수
(function () {
    console.log(`바로 실행처리`);
})();