'use strict';





function solution(price, money, count) {
    let result = 0;
    var answer = -1;

    for (let i = 1; i <= count; i++) {
        result += (price * i);
    }
    if (result <= money) {
        answer = 0;
    } else if (result > money) {
        answer = result - money;
    }


    return answer;
}

console.log(solution(3, 20, 4));
