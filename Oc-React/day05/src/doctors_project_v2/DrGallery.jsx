import React, { useState } from 'react';
import DrBigView from "./DrBigView";
import DrThumList from "./DrThumList";
import './DrGallery.scss';

const DrGallery = ({ thumnail, onBigView, viewThumNo }) => {
    thumnail.thums = thumnail.thums.map(item => item.thumNo === viewThumNo + 1 ? { ...item, bigView: true } : { ...item, bigView: false });
    return (
        <div className="dr-gallery">
            <DrBigView thumnail={thumnail} viewThumNo={viewThumNo} />
            <DrThumList thumnail={thumnail} onBigView={onBigView} />
        </div>
    );
};

export default DrGallery;