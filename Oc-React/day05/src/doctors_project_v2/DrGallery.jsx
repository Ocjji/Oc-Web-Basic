import React from 'react';
import DrBigView from "./DrBigView";
import DrThumList from "./DrThumList";
import './DrGallery.scss';

const DrGallery = (thumnail) => {
    return (
        <div className="dr-gallery">
            <DrBigView thumnail={thumnail} />
            <DrThumList thumnail={thumnail} />
        </div>
    );
};

export default DrGallery;