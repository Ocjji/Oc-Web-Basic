'use strict';

/* 
    ++ : +1 증가
    num = num + 1
    num += 1
    num++

    == : -1 감소
    num = num - 1
    num -= 1
    num--

    전위연산자
    ++(--)변수

    후위연산자
    변수++(--)

    js만 사용하면 전위와 후위가 상관없다
*/

let a = 10;
a++;
console.log(a);
++a;
console.log(a);
a--;
console.log(a);
--a;
console.log(a);

let num1 = 10;
let num2 = num1++;
console.log('num1 : %d , num2 : %d' , num1 , num2 );



