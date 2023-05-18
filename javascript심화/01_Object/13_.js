let arr = [10, 20, 30];
let arrCopy = arr; // 객체의 참조값 ( 메모리 주소 ) 복사

arr[0] = 100;

console.log(arr);
console.log(arrCopy);

let user = {
    name: '김다미',
    age: 20
}
let obj1 = {
    a: 50,
    b: 10
}
let obj2 = {
    a: 50,
    c: 60
}
let obj3 = {
    e: 80,
    c: 60,
    d: 100
}
