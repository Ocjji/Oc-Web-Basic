// 클래스와 인스턴스
// 같은 형식의 객체변수를 만들때 사용하는 class
class HelloWorld {
    // let, const 는 클래스 안에서 사용 불가
    message = null;
    constructor() {

    }
    sayHello() {
        console.log(this.message + '입니다.');
    }
    setKor() {
        this.message = '안녕하세요';
    }
    setEng() {
        this.message = '저는 홍길동';
    }
}

const x = new HelloWorld();
x.setKor();
x.sayHello();
x.setEng();
x.sayHello();

console.log();

class Person {
    name = null;
    age = 0;
    addr; // 아무것도 안 써도 되긴 함
    constructor(name, age, addr) {
        // 멤버변수 , 필드
        this.name = name;
        this.age = age;
        this.addr = addr;
    }
    // 메서드, 함수
    getInfo() {
        return `${this.name}이고 나이는 ${this.age}, 주소는 ${this.addr}입니다.`;
    }
}

const man1 = new Person('김개똥', 5, '서울');
console.log(man1.getInfo());

const man2 = new Person();
man2.name = '김영희';
man2.age = 10;
man2.addr = '인천';
console.log(man2.getInfo());