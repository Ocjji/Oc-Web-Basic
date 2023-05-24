// class - java 비슷
// static - 정적메소드 : 클래스에서 직접 값을 넘길 수 있다, 값을 가져올 수 있다.
class Human {
    name;
    kor;
    eng;
    constructor({ name, kor, eng }) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }
    static sum(...obj) {
        console.log(obj);
        return obj.reduce((acc, curr) => acc + (curr.kor + curr.eng), 0)
    }
}

//const man = new Human({ name: '홍길동', kor: 90, eng: 80 });
//console.log(man.sum());
const arr = [
    new Human({ name: '홍길동', kor: 90, eng: 80 }),
    new Human({ name: '강호동', kor: 80, eng: 70 })
]
console.log(Human.sum(arr[0], arr[1]));