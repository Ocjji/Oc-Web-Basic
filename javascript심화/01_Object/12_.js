// Object.freeze() : 얼리기, 동결 - 객체 수정 불가
const arr = [10, 20, 30];
arr[0] = 100;
console.log(arr);

Object.freeze(arr);
arr[0] = 500;
console.log(arr);

// arr.push(200);
console.log(arr);