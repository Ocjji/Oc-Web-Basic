class Man {
    count = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get nums() {
        return this.count += 1;
    }
    set nums(value) {
        this.count = value;
    }
}

let man1 = new Man('홍길동', 20);
console.log(man1.nums);
man1.name = '강호동';
console.log(man1.nums);
man1.name = '유재석';
console.log(man1.nums);