// console.error(); , dir, time, timeEnd 등 있음
console.error(new Error("에러 메세지 출력"));

const arr = [
    { name: "홍길동", age: 20 },
    { name: "임꺽정", age: 30 },
]
console.table(arr);

const obj = {
    data: {
        obj1: { class1: {}, class2: {} },
        obj2: { class1: {}, class2: {} },
        names: ["송혜교", "한가인"]
    }
}

console.dir(obj, { depth: 1, colors: true });
console.log(obj);

console.time("time start");
for (let i = 0; i <= 99999; i++) { }
console.timeEnd("time start");