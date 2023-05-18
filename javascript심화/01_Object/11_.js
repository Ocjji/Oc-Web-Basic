let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// 문제1  : 각각의 값에 50을 더해서 출력하세요 ( map )
let objArr1 = Object.keys(obj).map(item => obj[item] + 50);
console.log(objArr1);

// 문제2  : 30이상의 값만 출력 ( filter )
let objArr2 = Object.values(obj).filter(value => value >= 30);
console.log(objArr2);

// 문제3  : 30제외(삭제) 출력 ( filter )
let objArr3 = Object.values(obj).filter(value => value !== 30);
console.log(objArr3);

// 문제4  : 각각의 값을 100씩 더하고 누적값(reduce) 구하기
let objArr4 = Object.keys(obj).map(item => obj[item] + 100);
let sum = objArr4.reduce((acc, cur) => acc + cur);
console.log(sum);

// 문제5  : entries를 이용해서 값이 3으로 나누어 떨어지는것만 출력
let objArr5 = Object.entries(obj).filter(item => item[1] % 3 === 0);
console.log(objArr5);
