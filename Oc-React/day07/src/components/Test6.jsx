import React from 'react';
import styled, { css } from 'styled-components';

const Test6 = () => {
    return (
        <Container ww="400px" bg="pink">
            <Box width="120px" bg="skyblue">Test</Box>
            <Box width="110px">Test</Box>
            <Box width="130px" bg="lightcoral">Test</Box>
            <Box>Test</Box>
            <Box primary>Test</Box>
        </Container>
    );
};

export default Test6;

// 속성 : ${ props => props.해당속성 }
// 속성 : ${ props => props.해당속성 ? 값:값 }

const Container = styled.div`
    border: 1px solid #000;
    padding: 10px;
    margin: 10px;
    width:${props => props.ww};
    background:${props => props.bg ? props.bg : 'yellow'};
`;
const Box = styled.button`
    --accent-color : green;
    --font-s20 : 20px;

    width:${props => props.width ? props.width : '150px'};
    height:60px;
    margin: 5px;
    /* 컬러가 존재하면 컬러값을 넣고 없으면 기본값(파란색) 지정 */
    /* color : ${props => props.color ? props.color : 'blue'}; */
    background:${props => props.bg ? props.bg : 'yellow'};
    color:var(--accent-color);
    font-size:var(--font-s20);

    ${props => props.primary && css`
        display: block;
        width: 100%;
        border: none;
        border-radius:30px;
        background: #000;
        transition:0.2s;
        cursor: pointer;
        &:hover {
            background: #666;
            color: #fff;
        }
    `};
`;