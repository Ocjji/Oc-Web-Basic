'use strict';


let arr = [
    { id: 1, name: '사과', num: 10, dis: 0.2 },
    { id: 2, name: '딸기', num: 20, dis: 0.2 },
    { id: 3, name: '수박', num: 30, dis: 0.2 },
    { id: 4, name: '참외', num: 50, dis: 0.2 },
];

const make = (arr) => {
    let total = 0;

    for (let item of arr) {
        // item['num']
        total = total + (item['num'] * item['num'] * (1 - item['dis']));
    }
    return total;
}

let res = make(arr);
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