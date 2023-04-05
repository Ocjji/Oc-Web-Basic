'use strict';



/* 
    객체란 : 각종사물 - 보고, 만지고 느낄 수 있는 모든 사물
    키(속성) : 고유값
    메서드() : 모든행동()
    속성 + 메서드 : 멤버

    객체 : 강아지
    강아지.키 = 품종, 색상, 나이, 성별
    강아지.메서드() = 걷기, 달리기, 짖기, 꼬리흔들기, ...

    객체 : 현실 세계의 객체를 컴퓨터 언어로 변경한 것
    키(속성) : 객체가 가지고 있는 고유한 특징
    메서드() : 객체의 행위/동작/기능

    <형식>
    let 객체명 = {
        키 : 값 (숫자, 문자, 배열, 객체 등),
        키 : 값,
        키 : 값;
    
        메서드명 : function(){
            할일...
        }
    }

    객체명.키 / 객체명['키']
    객체명.메서드()
*/

let colors = {
    red: 'red',
    'green': 'green',
    'blue': 'blue'
}

let a = 'pink';
colors.a = a;


let b = 'plus';
let c = '++++';

colors[b] = c;


// 객체명 : 변수 규칙과 동일하다
console.log(`colors 객체명 안에 red키 값 : ${colors.red}`);
console.log(`colors 객체명 안에 green키 값 : ${colors['green']}`);
console.log(`colors 객체명 안에 blue키 값 : ${colors['blue']}`);
console.log(`colors 객체명 안에 pink키 값 : ${colors['a']}`);
console.log(`colors 객체명 안에 plus키 값 : ${colors['plus']}`);

for (let i in colors) {
    console.log(`${i}`);
}