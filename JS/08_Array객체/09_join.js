'use strict';

const elements = ['red', 'green', 'blue', 'pink'];

let str1 = elements.join();
console.log(str1, typeof str1);

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

let str2 = elements.join('  +  ');
console.log(str2, typeof str2);

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

let menus = ['menu1', 'menu2', 'menu3', 'menu4'];
// menu1-menu2-...

let str3 = menus.join('-');
console.log(str3);

let str4 = menus.join('<br>');
document.write(str4);
// join();

/* 

    Array.prototype.join()
    join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.


    구문
    arr.join([separator]) // separator는 생략가능

    매개변수
    separator (Optional)
    배열의 각 요소를 구분할 문자열을 지정합니다. 이 구분자는 필요한 경우 문자열로 변환됩니다. 생략하면 배열의 요소들이 쉼표로 구분됩니다. separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됩니다.

    반환 값
    배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. 만약 arr.length 가 0이라면, 빈 문자열을 반환합니다.

 */






