import React from 'react';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const GalleryView = ({ data, cat, onView }) => {
    return (
        <div className='bigview'>
            <GalleryBig cat={cat} />
            <GalleryList data={data} onView={onView} />
        </div>
    );
};

export default GalleryView;