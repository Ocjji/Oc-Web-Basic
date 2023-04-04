'use strict';


function make( x, y ) { // 매개변수 지역변수 {}
    console.log(`x : ${x} , y : ${y}`);

    let result1 = 0;  //  지역변수 , { } 스코프
    let result2 = 0;

    // if문 처리
    // undefined가 아니면
    // result 에 x값을 더해서 출력

    // if문 처리
    // undefined가 아니면
    // result 에 y값을 더해서 출력

    if ( x != undefined) {
        result1 += x;
        console.log(`result1 : ${result1}`);
    }

    if ( y != undefined) {
        result2 += y;
        console.log(`result2 : ${result2}`);
    }
}



make();
make(100);
make(100, 200);