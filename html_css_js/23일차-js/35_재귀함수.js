'use strict';

// 재귀함수 - 함수안에서 자기 자신을 호출하는 함수



const fn = num => {
    console.log(`${num} 호출`);
    num--;
    if (num === 0) {
        return;
    }
    fn(num);

}

fn(10);










