let obj = {
    name: "홍길동",
    age: 20
}
let obj1 = {
    name: "홍길동",
    age: 20,
    addr: {
        num1: "서울",
        num2: "인천"
    }
}

let objCopy = obj;
obj.name = "김태리";
console.log(obj);
console.log(objCopy);

console.log();
objCopy = { ...obj };
obj.name = "김고은";
console.log(obj);
console.log(objCopy);

let obj1Copy = { ...obj1 };
obj1.name = "송혜교";
obj1.addr.num1 = "제주";
console.log(obj1);
console.log(obj1Copy);

obj1Copy = JSON.stringify(obj1);
JSON.parse(obj1Copy);
obj1.addr.num1 = "부산";
console.log(obj1);
console.log(obj1Copy);