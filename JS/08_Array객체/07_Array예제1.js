'use strict';


let arr = [10, 20, 30, 50];
let discnt = 0.2;

const make = (arr, x) => {
    let total = 0;

    for (let i of arr) {
        total = total + (i * i * (1 - x));
    }
    return total;
}

let res = make(arr, discnt);
console.log(`총 누적 값 : ${res}`);

/* 

1. 사과 : 10
2. 딸기 : 20
3. 수박 : 30
4. 참외 : 50

할인율 : 0.2

계산식 : 사과가격 * 사과개수 * 할인율

결과 : 최종 가격

1. 변수 : arr = [10,20,30,50]
          discnt = 0.2
          total = 0;
    

2. 함수 : make() + return

 */