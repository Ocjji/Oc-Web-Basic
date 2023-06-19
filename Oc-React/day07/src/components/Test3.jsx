import React from 'react';
import './test3.css';
import styles from './Test3.module.css';

const Test3 = () => {
    return (
        <div className="wrap">
            <div className="box">test</div>
            <div className="box1">test</div>
            <hr />
            <div className={styles.box}>test</div>
            <div className={styles.box1}>test</div>
        </div>
    );
};

export default Test3;

/* 

    import styles from './Button.module.css';
    import 참조변수 from './파일명.module.css';

    <button className={참조변수.클래스명}>내용</button>;
    결과
    <button class="_클래스명_아무말">내용</button>;

    [filename]\_[classname]\_\_[hash]
    파일명_클래스명_아무말
    _클래스명_아무말

    * 유지보수시 클래스명이 동일하면 모두 바뀌기 때문에 해당 클래스만 처리할 경우
    
    1. 파일명.css 사용하여 하나로 모든 태그를 처리하는 방법 ->
    (html 프로젝트 작업방법)은 좋은 방법이 아니다

    2. todos 예시와 같이
        하나의 컴포넌트에 하나의 css/scss 작성 또는 module.css/module.scss

    3. 컴포넌트 하나에 대한 폴더를 만들고 그 안에 컴포넌트와 스타일을 같이 만드는 경우
    todoForm폴더 내 todoForm.jsx
                    todoForm.css / todoForm.scss / todoForm.module.css

    4. react는 scss(sass)권장 - styled-components 사용
*/