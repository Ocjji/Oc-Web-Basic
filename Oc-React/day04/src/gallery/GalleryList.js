import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({ data, onView }) => {
    return (
        <ul>
            {data.map(item => <li key={item.id} onClick={() => onView(item.id)}><GalleryItem item={item} /></li>)}
        </ul>
    );
};

export default GalleryList;