'use strict';

function make(name, age, addr) {
    // 삼항연산자 이용
    // 주소가 없으면 주소없음 출력
    /*     
        let test;
        test = (addr == undefined) ? '주소없음' : addr;
     */
    addr = addr ? addr : '주소없음';

    console.log(`이름 : ${name}, 나이 : ${age}, 주소 : ${addr}`);
}

make('김태리', 20, '서울');
make('김고은', 22);

// 매개변수에 기본값 지정 - 옵셔널 파라미터
function make1(name = '유재석', age = 12, addr = '인천') {
    console.log(`이름 : ${name}, 나이 : ${age}, 주소 : ${addr}`);
}

make1();
make1('박연진');
make1('임지연', 20);
make1('송혜교', 23, '인천');


const make2 = (x) => {
    return x * x;
}

let result = make2(2);
console.log(result);