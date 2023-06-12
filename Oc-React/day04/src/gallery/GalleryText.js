import React from 'react';

const GalleryText = ({ cat }) => {
    return (
        <div className='text'>
            <strong>{cat.title}</strong>
            <p>{cat.desc}</p>
        </div>
    );
};

export default GalleryText;