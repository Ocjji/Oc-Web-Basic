import React from 'react';

const Sub = (props) => {
    
    return (
        <div>
            <h2>이름 : {props.name}, {typeof props.name}</h2>
            <h2>나이 : {props.age}, {typeof props.age}</h2>
            <hr />
        </div>
    );
};

const Test7 = () => {
    const dog = {name:"강아지",age:20}
    const cat = {name:"고양이",age:10}
    return (
        <div>
        <Sub name="홍길동" age="30"/>   
        <Sub name="임꺽정" age={22}/>
        <Sub name={dog.name} age={dog.age}/>   
        <Sub name={cat.name} age={cat.age}/>   
        <Sub {...dog}/>   
        <Sub {...cat}/>   
        </div>
    );
};

export default Test7;