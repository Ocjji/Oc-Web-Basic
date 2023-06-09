import React from 'react';

const Test7Name = ({text,changeInput1}) => {
    return (
        <div>
            <h3>Test7Name</h3>
            <label>Name : </label>
            <input type="text" placeholder='이름 입력' onChange={changeInput1}/>
            <span style={{marginLeft:30}}>{text}</span>
        </div>
    );
};

export default Test7Name;