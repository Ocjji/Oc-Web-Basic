import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;
const Article = styled.div`
`;

const Test13 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

    }, [])
    return (
        <Container width="1200px">
            <Article>
                <a href="">
                    <h2>타이틀</h2>
                    <img src="" alt="" />
                    <p></p>
                </a>
            </Article>

        </Container>
    );
};

export default Test13;