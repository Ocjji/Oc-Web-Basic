// commonJS 방식
const { add, sub, mul, div, num1 } = require("./ex1.js");
console.log(num1);
console.log("두 수의 합 : ", add(10, 20));
console.log("두 수의 차 : ", sub(20, 15));
console.log("두 수의 곱 : ", mul(10, 20));
console.log("두 수의 분 : ", div(30, 10));