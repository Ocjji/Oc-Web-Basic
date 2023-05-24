/* 
Private 클래스 변수, 메소드
#변수
#메소드()
활용 : getter / setter
 */

class My {
    x = 10;
    y = 20;
    #z = 30;

    static #abc() {
        console.log('비공개');
    }
    run() {
        this.#z = 300;
        return this.#z;
    }
}
const m1 = new My();
m1.x = 100;
m1.y = 200;
// m1.#z = 300;
console.log(m1);
console.log(m1.run());
// m1.#abc();