class Ani {
    constructor(color) {
        this.color = color;
        this.age = 3;
    }
    run() {
        console.log("달린다");
    }
    eat() {
        console.log("먹는다");
    }
}

// 상속
// Ani -> Dog
class Dog extends Ani {
    /* 생략
    constructor(...args) {
        super(...args);
    } */
    swim() {
        console.log("수영한다");
    }
}
const dog1 = new Dog("yellow");
dog1.run();
dog1.eat();
dog1.swim();
console.log(dog1);