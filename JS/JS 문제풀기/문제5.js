'use strict';


function solution(X, Y) {
    var answer = '';

    let x_include = {};
    // X 숫자 빈도
    let y_include = {};
    // Y 숫자 빈도
    let res_include = {};

    for (let x of X) {
        if (x_include[x]) {
            x_include[x]++;
        } else {
            x_include[x] = 1;
        }
    }

    for (let y of Y) {
        if (y_include[y]) {
            y_include[y]++;
        } else {
            y_include[y] = 1;
        }
    }

    console.log(x_include);
    console.log(y_include);

    for (let i = 0; i < 10; i++) {
        if (x_include[i] != undefined && y_include[i] != undefined) {
            if (x_include[i] <= y_include[i]) {
                res_include[i] = x_include[i];
            } else {
                res_include[i] = y_include[i];
            }
        }
    }
    console.log(res_include);
    if (!res_include) {
        return -1
    }

    let pre_answer = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < res_include[i]; j++) {
            pre_answer.push(i);
        }

    }

    pre_answer.sort((a, b) => b - a);

    let res_answer = pre_answer.join('');

    console.log(pre_answer);

    console.log(res_answer);

    console.log(res_answer.charAt(0));
    if (res_answer == 0) {
        return String(0);
    } else if (res_answer > 0) {
        return String(res_answer);
    } else if (!res_answer) {
        return String(-1);
    }
}

let x = '100';
let y = '203450';

console.log(solution(x, y));
