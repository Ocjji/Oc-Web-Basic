// 사람, 운동종류, 운동시간
class Human {
    count = 0;
    constructor(name, sport, time) {
        this.name = name;
        this.sport = sport;
        this.time = time;
        this.count = this.count + 1;
        console.log('count : ' + this.count);
        console.log('[%s]의 운동은 %s이고, 운동시간은 %d', name, sport, time);
    }
    workout(target) {
        console.log(this.name + '(이)가 ' + target + '와 운동 시간은 ' + this.time);
    }
}

class Person extends Human {
    // 오버라이딩 
    workout(target) {
        console.log(this.name + '(이)가 ' + target + '(과)와 운동은 ' + this.sport);
    }
}

class Man extends Human {
    // 오버라이딩
    workout(target) {
        super.workout(target);
        console.log('>>> 함께 운동');
    }
}

class Female extends Person {
    constructor(name, sport, time, age, color) {
        super(name, sport, time);
        this.age = age;
        this.color = color;
    }
    say() {
        console.log(`${this.name}의 취미는 ${this.sport}, 나이는 ${this.age}이고 좋아하는 색상은 ${this.color}입니다.`);
    }
}

const man1 = new Person('홍길동', '런닝', 3);
man1.workout('유재석');

const man2 = new Man('강호동', '자전거', 5);
man2.workout('이수근');

const man3 = new Female()
man3.color = 'red';
man3.name = '김종민';
man3.age = 36;
man3.sport = '야구';
man3.time = 4;
man3.say();
