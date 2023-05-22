class Ani {
    name = null;
    age = null;
    constructor(name) {
        this.name = name;
        this.age = 3;
    }
    run() {
        console.log(`${this.name} 달린다.`);
    }
    eat() {
        console.log(`${this.name} 먹는다.`);
    }
}

class Dog extends Ani {
    constructor(...arg) {
        super(...arg);
    }
    // 추가
    sleep() {
        console.log(`${this.name} 잠잔다.`);
    }
}

class Cat extends Ani {
    constructor(...arg) {
        super(...arg);
    }
    // 추가
    swim() {
        console.log(`${this.name} 수영한다.`);
    }
    // 재정의
    run() {
        console.log(`${this.name} 오늘도 열심히 달린다.`);
    }
}

const dog = new Dog('강아지');
dog.run();
dog.eat();
dog.sleep();

console.log();

const cat = new Cat('고양이');
cat.run();
cat.eat();
cat.swim();