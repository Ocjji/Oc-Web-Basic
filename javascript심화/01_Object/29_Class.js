// Dog , Cat
// 컬러, 나이, run(), eat()

class Dog {
    constructor(color) {
        this.color = color;
        this.age = 4;
    }
    run() {
        console.log('달린다');
    }
    eat() {
        console.log('먹는다');
    }
}

class Cat {
    constructor(color) {
        this.color = color;
        this.age = 2;
    }
    run() {
        console.log('달린다');
    }
    eat() {
        console.log('먹는다');
    }
}

let dog1 = new Dog('white');
let dog2 = new Dog('brown');
console.log(dog1.color, dog1.age);
dog1.run();
dog1.eat();
