'use strict';


function solution(num1, dem1, num2, dem2) {
    var answer = [];

    let res_ja = 0;
    let res_mo = 0;

    res_ja = num1 * dem2 + num2 * dem1; 
    res_mo = dem1 * dem2;

    let div_max = 1;
    let small = 0;

    small = res_ja > res_mo ? res_ja : res_mo;

    for(let i = 0; i < small + 1; i++){
        if(res_ja % i === 0 && res_mo % i === 0){
            div_max = i;
        }
    }

    answer[0] = res_ja / div_max;
    answer[1] = res_mo / div_max;

    return answer;
}

