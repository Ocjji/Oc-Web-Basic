'use strict';

function solution(s) {
    var answer = 0;
    let temp = '';
    let same = 1;
    let differ = 0;
    let idx = 0;

    if (len % 2 === 1) {
        s += '1';
    }
    let len = s.length;
    temp = s[idx];

    do {
        console.log(s);
        idx++;
        // console.log(`${temp} , ${s[idx]}`);
        if (temp === s[idx]) {
            same++;
        } else if (temp !== s[idx]) {
            differ++;
        }
        // console.log(`same : ${same} , differ : ${differ} , idx : ${idx}`);

        if (same === differ) {
            // s = s.substr(idx + 1);
            temp = s[++idx];
            answer++;
            same = 1;
            differ = 0;
        }
        // console.log(s);
        // console.log(`idx : ${idx}`);
    } while (idx < len);

    return answer;
}

let res1 = solution('banana');
console.log(res1);
let res2 = solution('abracadabra');
console.log(res2);
let res3 = solution('aaabbaccccabba');
console.log(res3);