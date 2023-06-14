import React from 'react';
import DrThumItem from "./DrThumItem";

const DrThumList = ({ thumnail, onBigView }) => {
    const { thums } = thumnail;
    return (
        <ul className="thumList">
            {thums.map(item => <DrThumItem key={item.thumNo} item={item} onBigView={onBigView} />)}
        </ul>
    );
};

export default DrThumList;