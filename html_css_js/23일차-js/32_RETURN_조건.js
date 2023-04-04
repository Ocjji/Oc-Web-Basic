'use strict';

const fn = () => {
    console.log('테스트1');
    return null;
    return false;
    return true;
    return;
    console.log('테스트2');
    console.log('테스트3');
}

let x = fn();
console.log(x);

console.log();

const sum = (a, b) => {
    console.log(typeof (a));
    // if 타입이 숫자가 아니면 - 숫자가 아닙니다
    if (typeof (a) != 'number' || typeof (b) != 'number') {
        console.log(`a 또는 b 가 숫자가 아닙니다.`);
        return;
    } else {
        return a + b;
    }
}

let result = sum('10', '20');

if (typeof (result) !== 'undefined') {
    console.log(`결과 : ${result}`);
}
console.log();

result = sum(30, 40);

if (typeof (result) !== 'undefined') {
    console.log(`결과 : ${result}`);
}

