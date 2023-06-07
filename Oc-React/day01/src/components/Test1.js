import React from 'react';

const Test1 = () => {
    return (
        <>
            <h2> JSX 영역 </h2>
            <h3>
                태그는 열고 닫아야한다
                <br/><hr/>
                빈태그
                input, img, br, hr, ... 등은
                반드시 맨 뒤에 / 사용하여 닫는다
                <p>
                    return 의 시작은 div, main, section, article, ... 등을 사용한다<br/>
                    한줄 이상은 반드시!
                    div, 그 외 태그로 묶어야한다
                    <br/>
                    <br/>
                    Fragment : 빈 영역 ( 태그가 아니라 그냥 묶어주는 영역 )
                    React.Fragment
                </p>
            </h3>
        </>
    );
};

export default Test1;