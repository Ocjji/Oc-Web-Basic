'use strict';

let data = [
    { id: 1, name: '홍길동', age: 15, addr: '서울', msg: '홍길동 안녕!' },
    { id: 2, name: '고길동', age: 25, addr: '서울', msg: '고길동 안녕!' },
    { id: 3, name: '강호동', age: 22, addr: '인천', msg: '강호동 안녕!' },
    { id: 4, name: '송혜교', age: 18, addr: '서울', msg: '송혜교 안녕!' },
    { id: 5, name: '김철수', age: 24, addr: '부산', msg: '김철수 안녕!' },
    { id: 6, name: '김기철', age: 30, addr: '부산', msg: '김기철 안녕!' },
];

// let dom = document.querySelector();

let arr1 = data.map((elment, idx) => {
    return `<tr><td>${elment.id}</td><td>${elment.name}</td><td>${elment.addr}</td><td>${elment.msg}</td></tr>`
});
console.log(arr1);
// dom.innerHTML = arr1.join('');
