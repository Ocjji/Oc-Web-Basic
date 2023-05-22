class MemberClass {
    // 생성자함수
    constructor() {
        // this.변수 -> 멤버변수
        this.userName = null;
        this.email = null;
    }
    // class의 멤버변수 사용할 경우 this
}
// 클래스를 이용한 객체 생성
const m1 = new MemberClass();
console.log(m1);
