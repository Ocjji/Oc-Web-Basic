'use strict';
// && , || , ! - true / false
let test = true;

test = true && true ; // T
test = true && false; // F
test = false && false; // F

test = true || true ; // T
test = true || false ; // T
test = false || false ; // F

test = !test;

console.log( '결과 : %s' , test );

let a = 10, b = 20, c = 30, isplay = false, result = null;

result = ( a > b ) && ( a > c );
console.log('( a > b ) && ( a > c ) : %s' , result);
