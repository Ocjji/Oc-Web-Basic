import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightblue;
`;
const ani = keyframes`
    0% {transform:translateY(0px)}
    25% {transform:translateY(-20px) rotate(20deg)}
    50% {transform:translateY(10px)}
    75% {transform:translateY(-20px) rotate(-20deg)}
    100% {transform:translateY(0px)}
`;
const Hot = styled.article`
    font-size: 120px;
    animation: ${ani} 3s infinite ease-in-out;
`;

const Test8 = () => {
    return (
        <Container>
            <Hot>🎩</Hot>
        </Container>
    );
};

export default Test8;