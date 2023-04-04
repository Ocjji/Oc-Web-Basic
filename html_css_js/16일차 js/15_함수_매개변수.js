'use strict';


function make( x = 1, y = 10 ) { // 매개변수 초기값 설정(임의대로)
    console.log(`x : ${x} , y : ${y}`);

}

// 매개변수 초기값은 입력값일 없을때 적용되며,
// 매개변수의 입력이 있을때는 입력값이 우선된다.

make();
make(100);
make(100, 200);