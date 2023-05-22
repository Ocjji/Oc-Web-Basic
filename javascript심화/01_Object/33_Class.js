// 상속
class Animal {
    name = null;
    sound = null;
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    getHowl() {
        return `${this.name}의 울음소리는 ${this.sound}입니다.`;
    }
}
// sub Class
class Friend extends Animal {
    // 값 추가
    /* constructor(name, sound) {
        // 부모 클래스 생성자 호출
        super(name, sound);
    } */
    // 생략가능
    constructor(...rest) {
        super(...rest);
    }
}

const dog = new Friend('강아지', '멍멍');
const cat = new Friend('고양이', '야옹');
console.log(dog.getHowl());
console.log(cat.getHowl());

console.log();

// 생성자 이름 확인
console.log(dog.constructor.name);
console.log(cat.constructor.name);

//
console.log(dog instanceof Friend);
console.log(cat instanceof Friend);
console.log(dog instanceof Animal);
console.log(cat instanceof Animal);