import React from 'react';

const Dog = (props) => {
    // props = {name:"강아지"}
    return (
        <div>
            <h2>동물 이름 : {props.name}</h2>
        </div>
    );
};

const Cat = (props) => {
    // props = {name:"고양이"}
    // 구조분해, 비구조할당
    const {name} = props;
    return (
        <div>
            <h2>동물 이름 : {name}</h2>
        </div>
    );
};

const Cow = ({name}) => {
    // props = {name:"송아지"}
    return (
        <div>
            <h2>동물 이름 : {name}</h2>
        </div>
    );
};

const Test6 = () => {
    return (
        <div>
            <Dog name="강아지" />
            <hr />
            <Cat name="고양이" />
            <hr />
            <Cow name="송아지" />
            {/* 
                <자식컴포넌트 변수 = 값 />
                <자식컴포넌트 props명 = 전달값 />
                전달값 = "문자", {숫자}, {논리값}
                        - {함수, state값, setState 등}
                <자식컴포넌트 속성 = "문자" 속성 = {숫자} 속성 = {논리값} />
                속성 ->
                props객체 = {속성: "문자", 속성: 숫자, 속성: 논리값}
            */}
        </div>
    );
};

export default Test6;