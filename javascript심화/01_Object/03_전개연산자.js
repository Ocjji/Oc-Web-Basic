/* 
p.64
전개 연산자, 스프레드 연산자, 펼치기 연산자
... 전개 연산자
[], {} 양쪽의 형태를 제거하고 안에 내용만 가져오기
{값} => 객체 안에 값만 복사
 */
const names = ['보라돌이', '뚜비', '나나', '뽀'];
const foods = ['짜장면', '짬뽕', '탕수육'];

// 새로운 배열
// console.log(names.concat());
// console.log([...foods]);
// console.log(names.concat('햇님', '달님').concat(foods));
// console.log([...names, ...foods]);

const dog = { name: '치와와', age: 20, addr: '서울' };
const dog1 = { ...dog }

// console.log(dog);
// console.log(dog1);

const dog2 = { ...dog, name: '푸들', addr: '인천' }
// console.log(dog2);

// 새로운 배열
const data = [
    { id: 1, name: '보라돌이' },
    { id: 2, name: '뚜비' },
    { id: 3, name: '나나' },
    { id: 4, name: '뽀' }
]
const data1 = data.concat();
console.log(data1);
const data2 = [...data];
console.log(data2);
const data3 = data.concat({ id: 5, name: '햇님' });
console.log(data3);

// 데이터 추가시 많이 사용한다
const data4 = [...data, { id: 5, name: '달님' }]
console.log(data4);

// map - id/name
console.log(data1.map(item => {
    // {함수영역 return 값}
    return `${item.id} / ${item.name}`;
}));

console.log(data2.map(item => `${item.id} / ${item.name}`));


