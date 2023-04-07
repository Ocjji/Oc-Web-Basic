'use strict';
/* 
const t = '3141592';
const p = '271';
 */


function solution(t, p) {
    let t_len = t.length;
    let p_len = p.length;

    var answer = 0;

    for (let i = 0; i < t_len - p_len + 1; i++) {
        t.substr(i, p_len);
        console.log(t.substr(i, p_len));

        if (t.substr(i, p_len) <= p) {
            answer++;
        }
    }
    return answer;
}

let result = solution(t, p);
console.log(`개수 : ${result}`);








