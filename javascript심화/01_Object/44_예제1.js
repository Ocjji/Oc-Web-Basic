class Person {
    constructor(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.sum = kor + eng;
        this.avg = this.sum / 2;
        this.grade = null;
    }
    total() {
        return `${this.name}의 총점은 ${this.sum}입니다.`;
    }
    hak() {
        if (this.avg >= 90) {
            this.grade = 'A';
        } else if (this.avg >= 80) {
            this.grade = 'B';
        } else if (this.avg >= 70) {
            this.grade = 'C';
        } else {
            this.grade = 'D';
        }
        return `${this.name}의 학점은 ${this.grade}학점입니다.`;
    }
}

// const man1 = new Person('홍길동', 80, 90);
// console.log(man1);
// console.log(man1.total());
// console.log(man1.hak());

const arr = [
    new Person('홍길동', 80, 90),
    new Person('김철수', 90, 90),
    new Person('이수근', 70, 70),
    new Person('이영철', 60, 80)
];
for (let item of arr) {
    console.log(item.total());
}
console.log();
for (let item of arr) {
    console.log(item.hak());
}
console.log();
console.log(`총인원은 ${arr.length}명이고 합은 630이고 평균은 78.75`);