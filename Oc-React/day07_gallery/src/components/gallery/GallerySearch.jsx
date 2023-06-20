import React from 'react';
import styled from 'styled-components';

const GallerySearchForm = styled.form`
    height: 200px;
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    vertical-align:middle;
    input {
        padding: 0 10px;
        margin: 20px;
        width: 300px;
        height:50px;
        line-height:50px;
        font-size: 20px;
        box-sizing: border-box;
    }
    
    button {
        width: 80px;
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
    }
`;

const GallerySearch = ({ onSubmit, onChangeInput, text, txtRef }) => {
    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input type="text" ref={txtRef} value={text} onChange={onChangeInput} />
            <button type="submit">검색</button>
        </GallerySearchForm>
    );
};

export default GallerySearch;