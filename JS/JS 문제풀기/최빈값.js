'use strict';


function solution(array) {
    var answer = 0;
       
    let cnt = 0;
    let repeat = [];
    
    array.sort((a, b) => a - b);
    
    console.log(array);
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === array[i+1]){
            cnt++;
            repeat[i] = cnt;
        } else {
            cnt++;
            repeat[i] = cnt;
            cnt = 0;
        }
    }
    console.log(repeat);
    
    let max = 0;
    
    for(let i = 0; i < repeat.length; i++){
        max = repeat[i] > repeat[max] ? i : max;
    }
    console.log(`array에서 최빈값의 index: ${max}`);
    
    repeat.sort((a, b) => b - a);
    console.log(repeat);
    
    if(repeat[0] === repeat [1]){
        return -1;
    } else if (array.length === 1){
        return array[0];
    } else {
        return array[max];
    }
}

let arr = [2,2,4,4,5,6,4,4,8,7,2,6,4];

console.log(`빈도 높은 수 : ${solution(arr)}`);