function Man(name) {
    this.name = name;
}
// Object에서 상속 __proto__
// 생성자 함수에서 상속 prototype
Man.prototype.age = 10;
Man.prototype.color = 'red';
Man.prototype.run = function () {
    console.log(this.name, '오늘도 달린다');
}

const man1 = new Man('홍길동');
const man2 = new Man('보라돌이');
console.log(man1.name, man1.age, man1.color);
console.log(man2.name, man2.age, man2.color);
man1.run();
man2.run();

function User(name) {
    this.name = name;
}
User.prototype = {
    addr: '서울',
    color: 'blue',
    job: '웹개발자',
    work() {
        console.log(this.name, '개발중입니다.');
    }
}
const user1 = new User('아무개');

console.log(user1.name, user1.addr, user1.color, user1.job);
user1.work();

