'use strict';

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(typeof arr3);

const arr4 = arr1.concat(10, 20, 30);
console.log(arr4);
console.log(typeof arr4);

const arr5 = arr2.concat('철수', '영희');
console.log(arr5);
console.log(typeof arr5);

/* 
    Array.prototype.concat()

    concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서
    **** 새 배열을 반환합니다.  ****


        구문
        array.concat([value1[, value2[, ...[, valueN]]]])

        매개변수
        배열 또는 값
        만약 value1 ~valueN 인자를 생략하면 기존배열의 얕은 복사본을 반환.

        valueN (Optional)
        : 자세한 내용은 아래 설명을 참고하세요.

        반환값
        새로운 Array 객체.
 */
