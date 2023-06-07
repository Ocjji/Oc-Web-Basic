import React from 'react';

const Test2 = () => {
    // 함수영역, ; 생략가능
    let title = "신상명세서";
    const name = "홍길동";
    const age = 20;
    const addr = "인천";
    const tel = "010-2222-6666";

    // css 객체형 '속성' : '값' , backgroundColor
    const css1 = {
        fontSize : 30,
        width:300,
        lineHeight:'50px',
        backgroundColor: 'pink'
    }
    const css2 = {
        fontWeight : 700,
        width: 600,
        color: 'red',
        borderBottom:'3px solid skyblue',
        paddingBottom:20
    }

    return (
        <>
            <h2 style={css1}>{title}</h2>
            <h3 style={css2}>수식, 변수 등 반드시 &#123; &#125; 사용하여 묶는다</h3>
            <ul>
                <li style={{color: 'green', fontSize:24}}>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
            </ul>
        </>
    );
};

export default Test2;