'use strict';

let arr = ['red', 'green', 'blue'];
console.log(arr);

arr.push('pink');
console.log(arr);
console.log(arr.push('pink')); // arr.length 를 반환한다.

arr.push('black');
console.log(arr);

arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

// 수정할때
arr[0] = '노랑';
arr[1] = '주황';
console.log(arr);

// 데이터 길이를 모르는 상태에서, 맨 뒤 값을 변경하고 싶을 때??

arr.push('black');
arr.push('black');
arr.push('black');
arr.push('black');
arr.push('black');
console.log(arr);

// 1번 방법
arr[arr.length - 1] = '하늘색';
console.log(arr);

// 2번 방법
arr.pop();
arr.push('견문색');
console.log(arr);

/* 
    ********* 실제값이 변경된다 : 원본이 변경된다 !!!!! 주의 !!!!! **********

    Array.prototype.push()
    push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.

    Array.prototype.pop()
    pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.

    Array.prototype.shift()
    shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

    Array.prototype.unshift()
    unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

    구문
        arr.push(element1[, ...[, elementN]])
    
    매개변수
    elementN
    배열의 끝에 추가할 요소.

    반환 값
    호출한 배열의 새로운 length 속성.
 */

