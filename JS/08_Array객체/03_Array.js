'use strict';

// 배열객체 - [{},{},{},{}] - React 에서 자주 사용

let data = [
    { id: 1, name: '김철수', age: 20 },
    { id: 2, name: '김수철', age: 25 },
    { id: 3, name: '심구철', age: 23 },
    { id: 4, name: '박수현', age: 14 }
]

console.log(data);
console.log(data[0]);
console.log(data[0].id, data[0].name, data[0].age);
console.log(data[0]['id'], data[0]['name'], data[0]['age']);

for (let i = 0; i < data.length; i++) {
    console.log(`번호 : ${data[i]['id']}, 이름 : ${data[i]['name']}, 나이 : ${data[i]['age']}`);
}

console.log();

for (let item of data) {
    console.log(`번호 : ${item['id']}, 이름 : ${item['name']}, 나이 : ${item['age']}`);
}








