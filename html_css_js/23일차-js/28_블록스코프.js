'use strict';

// 블록스코프 : {} 지역변수
// if(){}, for(){}, function(){}, ...
if (1) {
    var a1 = '변수 선언 var / var 사용하지 않는다(위험)';
    let a2 = '변수 선언 let';
    function fn1() {
        console.log('선언적함수');
    }
    const fn2 = function () {
        console.log(`익명함수`);
    }
    const fn3 = () => {
        console.log(`화살표함수`);
    }
    (function () {
        console.log(`즉시실행함수`);
    })();
}
if (1) {
    // console.log(`a1 : ${a1}`);
    // console.log(`a2 : ${a2}`);
    // fn1();
}













