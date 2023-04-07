'use strict';

let arr = [60, 50, 40, 20, 30, 40, 80, 90, 10];
console.log(arr.sort());

console.log();

let arr1 = [60, 50, 40, 120, 20, 30, 150, 40, 80, 200, 90, 10];
console.log(arr1.sort());

/* 
결과값 : [
    10, 120, 150, 20, 200,
    30,  40,  40, 50,  60,
    80,  90
  ] */

arr1.sort(function (a, b) {
    console.log(a, ' / ', b);
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(arr1);

console.log();

let arr2 = [60, 50, 40, 120, 20, 30, 150, 40, 80, 200, 90, 10];
arr2.sort(function (a, b) {
    return a - b;
});
console.log(arr2);

console.log();

let arr3 = [60, 50, 40, 120, 20, 30, 150, 40, 80, 200, 90, 10];
arr3.sort((a, b) => {
    return a - b;
});
// arr3.sort((a, b) => a - b);
console.log(arr3);

let arr4 = [10, 50, 40, 30];
console.log(arr4);
arr4.reverse();
console.log(arr4);

// 1. arr3은 이미 오름차순이다. reverse()를 사용하여 내림차순
arr3.reverse();
console.log(arr3);
/* 
sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

정렬 속도와 복잡도는 각 구현방식에 따라 다를 수 있습니다.
 
구문
    arr.sort([compareFunction])

매개변수
compareFunction Optional
정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.

반환 값
정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.

*/

