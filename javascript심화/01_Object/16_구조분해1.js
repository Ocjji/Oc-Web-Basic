// 구조분해 , 비구조할당
// 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

let arr = ['강아지', '고양이', '송아지'];
let a1 = arr[0];
let a2 = arr[1];
let a3 = arr[2];

let [na1, na2, na3] = ['강아지', '고양이', '송아지'];
console.log(na1, na2, na3);

let [a, [b, c]] = [10, [20, 30]];
console.log(a, b, c);

let [num1, ...nums] = [10, 20, 30];
console.log(num1, nums);

let [name, ...names] = ['강아지', '고양이', '송아지'];
console.log(name, names);


const { dog, cat, calf } = { dog: "강아지", cat: "고양이", calf: "송아지" };
console.log(dog, cat, calf);
