import React from 'react';

const abc = () => {
    return (
        <div>
            컴포넌트 연습
        </div>
    );
};


export default abc;
// return 부분을 넘겨준다

/* 

1. 확장자 js, jsx
2. 파일명은 아무거나 해도 된다
    단, rsc
    첫글자 대문자로 시작하는 것이 좋다

3. 컴포넌트 : UI의 작은 조각 - 재사용성
    함수형 컴포넌트 : 함수구조

return문 안에 작성하는 구조는 JSX
개발형식은 HTML 구조
1. 연산자 : &&, ||, 삼항연산자 ( 3가지만 가능하다 )
2. 반복문 : map 외에는 사용하지 못한다. 조건은 filter를 사용한다.
3. 자바스크립트식, 변수 등 {변수, 식}
4. '문자' + 변수 - 추천하지 않는다.
    `문자 ${변수 or 수식}` - 템플릿 리터널을 사용해준다.
5. const 컴포넌트명 = () => {
    함수영역 - 모든 명령어 사용가능
    ( for, if, ... 등등 )
    
    return (
        ***** JSX 영역 *****
    )
}
export default 컴포넌트명 - 메인은 하나만

import 참조변수 from '경로' - default
import {참조변수} from '경로' - export

import 참조변수 from '경로' - default
참조변수의 첫글자는 대문자로
<참조변수 />

*/