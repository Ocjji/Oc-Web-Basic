// 이름, 속도, 시간 기본값
// equip(운동기구)
// workout(친구)

class Human {
    constructor(name, speed, time) {
        this.name = name;
        this.speed = speed;
        this.time = time;
        console.log(`생성자 실행 : ${this.name}의 운동속도 ${this.speed} 시간은 ${this.time}`);
    }
    equip(target) {
        console.log(`${this.name}의 운동기구 ${target}`);
    }
    workout(target) {
        console.log(`${this.name}의 운동친구 ${target}`);
    }
}

const man = new Human('홍길동', 30, 2);
man.equip('아령');
man.workout('유재석');

const arr = [
    new Human('고라니', 30, 4),
    new Human('고양이', 20, 2),
    new Human('강아지', 24, 1)
]
console.log(arr.length + '명');
for (let item of arr) {
    item.equip('줄넘기');
    item.workout('송아지');
}