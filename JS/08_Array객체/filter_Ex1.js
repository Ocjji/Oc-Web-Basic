'use strict';

let data = [
    { id: 1, name: '홍길동', age: 15, addr: '서울' },
    { id: 2, name: '고길동', age: 25, addr: '서울' },
    { id: 3, name: '강호동', age: 22, addr: '인천' },
    { id: 4, name: '송혜교', age: 18, addr: '서울' },
    { id: 5, name: '김철수', age: 24, addr: '부산' },
    { id: 6, name: '김기철', age: 30, addr: '부산' },
];

let busan = '부산';

let data_busan = [];



for (let i = 0; i < data.length; i++) {
    let temp = {};

    if (data[i].addr === busan) {

        temp.name = data[i].name;
        temp.age = data[i].age;

        data_busan.push(temp);
    }

}
console.log(data_busan);

