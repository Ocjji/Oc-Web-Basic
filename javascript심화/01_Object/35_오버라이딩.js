// 오버라이딩(overriding) : 상위(부모) 클래스에 있는 메소드를 하위(자식) 클래스에서 재정의 하는 방식
// super 키워드 - 상속받은 상위클래스

class Father {
    constructor() {
        console.log(`2. Father 생성자 함수 호출`);
    }
    say() {
        console.log(`Father의 say() 메소드 호출`);
    }
}

class Son extends Father {
    constructor() {
        console.log(`1. Son 생성자 함수 호출`);
        super();
    }
    // say 함수 재정의 할 수 있다.
    say() {
        console.log(`Son 함수에서 say() 함수 재정의`);
    }
    test() {
        // 부모의 say() 메소드 호출
        super.say();
    }
}

const son = new Son();
son.say();
son.test();
