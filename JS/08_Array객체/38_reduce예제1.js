'use strict';

let data = [
    { id: 1, name: '홍길동', age: 15, addr: '서울', msg: '홍길동 안녕!' },
    { id: 2, name: '고길동', age: 25, addr: '서울', msg: '고길동 안녕!' },
    { id: 3, name: '강호동', age: 22, addr: '인천', msg: '강호동 안녕!' },
    { id: 4, name: '송혜교', age: 18, addr: '서울', msg: '송혜교 안녕!' },
    { id: 5, name: '김철수', age: 24, addr: '부산', msg: '김철수 안녕!' },
    { id: 6, name: '김기철', age: 30, addr: '부산', msg: '김기철 안녕!' },
];

// 1. 나이의 총합
let age_sum = 0;
age_sum = data.reduce((acc, cur) => { return acc + cur.age }, 0);
console.log(age_sum);

// 2. 평균나이 (소숫점 2자리)
let age_avg = 0;
age_avg = age_sum / data.length;
console.log(age_avg.toFixed(2) + '살');

// 3. 이름만 뽑아내기
let data2 = [];
for (let item of data) {
    data2.push(item.name);
}
console.log(data2);

// 4. 
let data3 = data.reduce((acc, cur) => {
    acc.push(cur.name);
    return acc;
}, [])
console.log(data3);

