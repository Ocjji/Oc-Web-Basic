'use strict';
function solution(array) {

    let resultArr = [0, 0],
       answerArr = [],
       overlap = false;

    for (let i = 0; i < array.length; i++) {
       answerArr[i] = [array[i], array.filter(item => item === array[i]).length];
    }

    for (let i of answerArr) {
       if (resultArr[1] < i[1] && resultArr[0] !== i[0]) {
          resultArr = i;
          overlap = false;
       } else if (resultArr[1] === i[1] && resultArr[0] !== i[0]) {
          overlap = true;
       }
    }
    
    return overlap === true ? -1 : resultArr[0];
 }