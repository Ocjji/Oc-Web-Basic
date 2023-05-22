class Person {
    constructor(name, num1, num2) {
        this.name = name;
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
        return (this.num1 + this.num2);
    }
}

class Man extends Person {
    /* constructor(name, num1, num2, mat) {
        super(name, num1, num2);
        this.mat = mat;
    } */
    constructor(mat, ...arg) {
        super(...arg);
        this.mat = mat;
        console.log(this.name, this.num1, this.num2, this.mat);
    }
    sum() {
        // return (this.num1 + this.num2 + this.mat);
        // 온전한 부모값을 그대로 사용하고 싶을때 오버로딩
        return (super.sum() + this.mat);
    }
}

const person = new Person('홍길동', 80, 80);
console.log(person.sum());

const man = new Man(80, '김영희', 60, 70);
console.log(man.sum());
