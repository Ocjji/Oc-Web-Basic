'use strict';

// 재귀함수 - 함수안에서 자기 자신을 호출하는 함수
let count = 1;


const fn = () => {
    console.log(`${count}번 호출`);
    count++;
    if (count > 5) {
        return 0;
    }
    fn();

}

fn();
console.log(count);







