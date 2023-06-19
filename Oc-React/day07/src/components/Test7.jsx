import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:${props => props.width};
    border: 3px solid #000;
    padding: 15px;
    margin: 15px auto;
    text-align: center;
    h2 {
        font-size:40px;
        color:green;
        margin-bottom: 20px;
    }
`;
const Button = styled.button`
    width: 120px;
    height: 50px;
    margin: 0 10px;
    cursor: pointer;
    &.up::after {content:"📤"}
    &.down::after {content:"​📥"}
    &:hover {background:tomato}
    &:disabled {
        filter:grayscale(100%);
        background:#333;
        cursor: not-allowed;
    }
`;

const Test7 = () => {
    const [count, setCount] = useState(1);
    const onDown = () => {
        setCount(count < 0 ? 0 : count - 1);
    }
    const onUp = () => {
        setCount(count > 10 ? 10 : count + 1);
    }
    return (
        <Container width="300px" color="green">
            <h2>카운트 : {count}</h2>
            <p>
                <Button className="down" onClick={onDown} disabled={count < 1}></Button>
                <Button className="up" onClick={onUp} disabled={count > 9}></Button>
            </p>
        </Container>
    );
};

export default Test7;