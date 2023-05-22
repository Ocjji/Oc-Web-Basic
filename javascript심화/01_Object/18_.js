// hasOwnPropertyhasOwnProperty() 메소드는 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환한다.

const obj = {
    name: "KHJ",
    age: 20
}
obj["addr"] = '서울';
console.log(obj);
// 비구조할당
const { name, age, addr } = obj;
console.log(name, age, addr);
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("addr"));
console.log(obj.hasOwnProperty("title"));

const obj1 = {
    name: '홍길동',
    age: 30,
    hasOwnProperty: function () {
        console.log('hasOwnProperty');
    }
}
obj1.hasOwnProperty();

