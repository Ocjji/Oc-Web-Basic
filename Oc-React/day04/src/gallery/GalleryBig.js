import React from 'react';

const GalleryBig = ({ cat }) => {
    const { imgURL, title } = cat;
    return (
        <div className='bigimg'>
            <img src={imgURL} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default GalleryBig;