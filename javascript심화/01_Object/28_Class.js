/* 
    클래스
    new 클래스명()
    class 키워드 사용
    객체지향 프로그래밍에서 사용하는 다양한 기능
    객체를 정의 상태( 멤버변수 )
    메서드( 함수 )
    Class는 객체를 생성하기 위한 템플릿
    
    class 클래스명 {
        constructor(){
            this.멤버변수 = 값
        }
        메서드(){}
    }
 */

class Test {
    name = '홍길동';
    age = 20;
}

const test1 = new Test();
console.log(test1.name, test1.age);

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 메서드
    run() {
        console.log(this.name, '오늘도 달린다');
    }
}
const user1 = new User('아무개', 30);
console.log(user1.name, user1.age);
user1.run();
