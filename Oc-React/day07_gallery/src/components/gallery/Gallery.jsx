import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import GallerySearch from "./GallerySearch";
import GalleryList from "./GalleryList";

import { Container } from '../styled/galleryStyle';
// 위 한줄 코드로 아래 두가지 주석 동시 처리

// import styled from 'styled-components';

/* const Container = styled.div`
    width:${props => props.width};
    margin: auto;
    border: 1px solid #000;
`; */

const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [text, setText] = useState("dog");
    const [url, setURL] = useState(`https://pixabay.com/api/?key=36875440-c83fd8a4ba9fe6a2af99c35a6&q=${text}&image_type=photo`);
    const txtRef = useRef(null);

    useEffect(() => {
        const API_KEY = '36875440-c83fd8a4ba9fe6a2af99c35a6';
        setURL(`https://pixabay.com/api/?key=36875440-c83fd8a4ba9fe6a2af99c35a6&q=${text}&image_type=photo`);

        axios.get(url)
            .then(res => {
                setData(res.data.hits);
                setLoading(true);
                setError(null);
            })
            .catch(error => {
                setData([]);
                setLoading(false);
                setError('api 주소를 확인하세요');
            })
    }, [url]);

    const onSubmit = (e) => {
        e.preventDefault();
        setURL(`https://pixabay.com/api/?key=36875440-c83fd8a4ba9fe6a2af99c35a6&q=${text}&image_type=photo`);
        txtRef.current.focus();
    }

    const onChangeInput = (e) => {
        const { value } = e.target;
        setText(value);
    }

    return (
        <Container width="1400px">
            <GallerySearch onSubmit={onSubmit} onChangeInput={onChangeInput} text={text} txtRef={txtRef} />
            <GalleryList data={data} />
        </Container>
    );
};

export default Gallery;