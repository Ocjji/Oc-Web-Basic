'use strict';


let score = [
    ['김철수', 80, 90, 100],
    ['김월수', 70, 80, 100],
    ['김화수', 80, 90, 70],
    ['김수수', 80, 90, 80],
    ['김목수', 80, 70, 60],
]

let sum = 0;
let cnt = 0;
for (let i = 0; i < score.length; i++) {
    for (let j = 1; j < 4; j++) {
        sum += score[i][j];
        cnt++;
    }
}

console.log(`반 총점 : ${sum}`);
console.log(`반 평균 : ${(sum / cnt).toFixed(2)}`);