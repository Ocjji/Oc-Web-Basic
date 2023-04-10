'use strict';

let data = [
    { id: 1, name: '홍길동', age: 15, addr: '서울' },
    { id: 2, name: '고길동', age: 25, addr: '서울' },
    { id: 3, name: '강호동', age: 22, addr: '인천' },
    { id: 4, name: '송혜교', age: 18, addr: '서울' },
    { id: 5, name: '김철수', age: 24, addr: '부산' },
    { id: 6, name: '김기철', age: 30, addr: '부산' },
];

let incheon = '인천';
let seoul = '서울';
let busan = '부산';

console.log(data[0].name, data[1].age);


// for문, if문 주소가 부산인 객체 배열 출력하기
let data_busan = [];

for (let i = 0; i < data.length; i++) {
    console.log(data[i].addr);
    if (data[i].addr === busan) {
        data_busan.push(data[i]);
    }
}
console.log(data_busan);

// filter를 사용하여 주소가 서울인 객체 배열 출력하기
let data_seoul = [];

data_seoul = data.filter(function (element) {
    return element.addr === seoul;
});
console.log(data_seoul);

// 나이가 20이상인 사람만 출력
let data_ageOver = [];

data_ageOver = data.filter(element => element.age >= 20)
console.log(data_ageOver);

// 송혜교만 삭제
let data_remove_song = [];

data_remove_song = data.filter(element => element.name !== '송혜교');
console.log(data_remove_song);

// 김 씨 객체 출력하기
let kim = '김';

let data_kim1 = [];
let data_kim2 = [];

data_kim1 = data.filter(element => element.name.includes(kim));

data_kim2 = data.filter(element => element.name.indexOf(kim) !== -1);

console.log(data_kim1);
console.log(data_kim2);

