import React from 'react';
import styled from 'styled-components';

const GalleryItemBox = styled.article`
margin: 30px 20px;
    padding: 50px;
    text-align: center;
    background: lightcoral;
    img {
        width: 240px;
    }
    h2 {
        font-size: 24px;
        margin: 10px 0;
    }
    ul {
        margin: 10px 0; 
    }
    span {
        display: inline-block;
        margin:0 10px;
    }
`;

const GalleryItem = ({ item }) => {
    const { id, views, downloads, previewURL, tags, likes, user } = item;
    const arr_tags = tags.split(',');
    return (
        <GalleryItemBox>
            <img src={previewURL} alt="" />
            <h2>{user}</h2>
            <ul>
                <li>조회수 : {views}</li>
                <li>좋아요 : {likes}</li>
                <li>다운로드 : {downloads}</li>
            </ul>
            <p>
                {
                    arr_tags.map((item, idx) => <span key={idx + 1}>#{item} </span>)
                }

            </p>
        </GalleryItemBox>
    );
};

export default GalleryItem;