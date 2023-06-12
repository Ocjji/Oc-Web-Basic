import React from 'react';

const GalleryItem = ({ item }) => {
    return (
        <>
            <img src={item.imgURL} alt="" />
        </>
    );
};

export default GalleryItem;