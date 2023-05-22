/* 
생성자 함수
1. 함수명 첫글자는 대문자로 시작
2. new 함수명() - return 값이 없어도 반환한다
    사용할 수 있는 객체생성코드로 구현

    일반함수식과 동일 : 재사용하기 위해서 사용

    class 이전에 많이 사용함 **
*/

/* 
function 함수명() {
    ...
}
const 변수 = new 함수명();
 */

function Man() {
    this.name = '김철수';
    this.age = 20;
}

let man1 = new Man();
let man2 = new Man();
console.log(man1.name, man1.age);
console.log(man2.name, man2.age);

const User = function (id, email) {
    this.id = id;
    this.email = email;
};
const foo = new User('aaa', 'aaa@naver.com');
console.log(foo);

function User1(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.run = function () {
        console.log(this.name + '(은/는) 오늘도 달린다.');
    }
}
const user1 = new User1('김태리', 20, '웹디자이너');
console.log(user1);
user1.run();


