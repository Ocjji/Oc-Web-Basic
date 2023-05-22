class Person {
    constructor({
        name: name,
        age: age
        // 단순하게 name, age 로 작성 가능하다.
    }) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name}의 나이는 ${this.age}입니다.`;
    }
}

class Person1 {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
    }
    getInfo() {
        return `${this.name}의 나이는 ${this.age}입니다.`;
    }
}

class Person2 {
    constructor(obj) {
        // 비구조할당, 구조분해
        let { name, age } = obj;
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name}의 나이는 ${this.age}입니다.`;
    }
}

const man1 = new Person({ name: '홍길동', age: 20 });
console.log(man1.getInfo());

const man2 = new Person1({ name: '심청이', age: 25 });
console.log(man2.getInfo());

const man3 = new Person2({ name: '맹꽁이', age: 18 });
console.log(man3.getInfo());

const obj1 = { name: '김돌쇠', age: 30 };
const man4 = new Person(obj1);
console.log(man4.getInfo());

const obj2 = { name: '김순자', age: 27 };
const man5 = new Person({ ...obj2 });
console.log(man5.getInfo());