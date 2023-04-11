'use strict';

let arr = ['가위', '바위', '보'];

let me = '';
let com = '';

me = Math.floor(Math.random() * 3);
console.log(me);

com = Math.floor(Math.random() * 3);
console.log(com);


// if (me === com) {
//     res = '비겼습니다.';
// } else if (me === 2 && com === 0) {
//     res = '컴퓨터 승리!';
// } else if (me === 0 && com === 2) {
//     res = '나의 승리!';
// } else if (me < com) {
//     res += '컴퓨터 승리!';
// } else if (me > com) {
//     res = '나의 승리!';
// }
// 위 코드로 가능하지만 함수사용...
// 함수의 사용은 여러 곳에서 가능해서 코드마다 다를 수 있습니다.

const vs = (a, b) => {
    let res = '';

    if (a === b) {
        res = '비겼습니다.';
    } else if (a === 2 && b === 0) {
        res = '컴퓨터 승리!';
    } else if (a === 0 && b === 2) {
        res = '나의 승리!';
    } else if (a < b) {
        res += '컴퓨터 승리!';
    } else if (a > b) {
        res = '나의 승리!';
    }
    return res;
}

let msg = vs(me, com);

console.log(`나 : ${arr[me]} , 컴퓨터 : ${arr[com]}\n결과 : "${msg}"`);


