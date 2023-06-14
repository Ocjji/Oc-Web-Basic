import React from 'react';

const DrThumItem = ({ item, onBigView }) => {
    const { thumNo, img, bigView } = item;
    return (
        <li onClick={() => onBigView(thumNo)}>
            <img className={bigView ? "on" : ""} src={img} alt="" />
        </li>
    );
};

export default DrThumItem;