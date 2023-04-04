// 한줄주석
/* 여러줄 주석 Alt + Shift + A */
/* 
    변수란
        변하는 값을 저장하는 저장공간(메모리)
        문자, 숫자, 논리값(true, false)

    형식
        var 변수명 = 값 (X)
        let 변수명 = 값
        const 변수명 = 값

        let : 값 변경 가능
        const : 값 변경 불가 ( 상수형 )

    이름규칙
        1. 영문자, 숫자, _, & 혼용해서 사용
        2. 첫글자 반드시 숫자를 제외한
           주로 영문자 소문자로 시작한다
           대문자 시작은 주로 클래스명 사용할 때!
        3. 한글 가능 - 사용하지 않는 것이 좋음
        4. 특수문자, 공백 사용불가
        5. 대소문자 구별
        6. 두 단어가 합쳐지면,
           dog_cat : 스네이크 표기법
           dogCat : 카멜 표기법(낙타표기법)
        7. 이름은 값을 알아볼 수 있는 영문으로 작성한다

        변수 = 값
        
*/


var num1 = 100;
console.log(num1);

let num2 = 200;
console.log(num2);

let num3 = 300;
console.log(num3);

const num4 = 400;
console.log(num4);