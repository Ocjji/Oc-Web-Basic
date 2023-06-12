import React, { useState } from 'react';
import '../assets/css/reset.css';
import './Gallery.scss';
import dataList from '../assets/api/galleryData';
import GalleryView from './GalleryView';
import GalleryText from './GalleryText';

const Gallery = () => {
    const [data, setData] = useState(dataList);
    const [cat, setCat] = useState(data[0]);
    const onView = (id) => {
        setCat(data[id - 1]);
    }
    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onView={onView} />
            <GalleryText cat={cat} />
        </div>
    );
};

export default Gallery;